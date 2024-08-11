import React,{lazy,Suspense} from 'react';
import * as strings  from '../constants/strings';
import './layout.scss';

//import { useSelector, useDispatch } from 'react-redux';
//import { setFaqQuesName, selectFaqsReducer } from '@store/slices/faqsSlice';

//import { getIsMobile } from '@utility/utility';
const Header = lazy(() => import('./header'), { loading: () => '', });
const LeftMenu = lazy(() => import('./leftMenu'), { loading: () => '', });

function mainLayout(props) {
  const isMobile = false //getIsMobile();
  const {leftMenu = true} = props;
 // const faqsQuesName = useSelector(selectFaqsReducer);
  return (
    <Suspense>
      <head>
        <title>{strings.HEAD_TITLE} {props.pageName ? props.pageName : ""}</title>
        {/* <meta charSet='UTF-8' /> */}
        {/* <meta name="robots"       content="noindex, nofollow" /> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name='viewport' content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0" />
        <meta name="description" content={strings.HEAD_META_DESCRIPTIONS} />
        <link rel="shortcut icon" href={`/favicon.ico`} type="image/x-icon" />
      </head>
      <div className={'wrapperLayout'}>
        <Header {...props} />
        <div className={'mainContainerLayout'} id='mainContainerLayout'>
        {(leftMenu && !isMobile) && <LeftMenu {...props} />}
         {/* {!leftMenu && faqsQuesName?.length >0 &&
          <div className={styles.selectedReducerData} >
            {faqsQuesName?.map((items, index) => (<p key={++index} className={styles.text}>{`${index}) ${items.ques}`}</p>))}
           </div>
          } */}
          <section className={'mainContentSection'}>{props.children}</section>
        </div>
      </div>
    </Suspense>
  );
};

export default mainLayout;



