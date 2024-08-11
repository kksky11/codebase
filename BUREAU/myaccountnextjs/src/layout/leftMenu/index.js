import {useState ,useEffect} from 'react';
import { useRouter } from 'next/router';
import { MY_ACCOUNT,MY_PRODUCT}       from "@constants/strings";
import { getCurrentURL } from "@utils/utility";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMenu, selectSelectedMenu } from '@store/slices/myAccountSlice';
import styles from './leftMenu.module.scss';
 const LeftMenu = (props) => {
   const dispatch     = useDispatch();
   const selectedMenu = useSelector(selectSelectedMenu);
   const router = useRouter();
   let activeUrl = getCurrentURL();
   const [selectedSideBarMenu, setSelectedSideBarMenu] = useState('myAccount');
   const [scrolledLeftMenu, setScrolledLeftMenu] = useState('');
   const [leftMenuData, setLeftMenuData] = useState([]);

   const actionHandler=(actionType, data)=>{ 
       dispatch(setSelectedMenu(actionType));
        switch(actionType){
            case 'dropdown'     : setSelectedSideBarMenu(MY_PRODUCT[data?.label]); break;
            case 'my-account/dashboard'  : router.push(actionType);  setSelectedSideBarMenu(actionType); break;
            case 'CREDIT_CARD_URL'       : 
            case 'HOME_LOAN_URL'         : 
            case 'PERSONAL_LOAN_URL'     : 
            case 'BUSINESS_LOAN_URL'     : 
            case 'LOAN_AGAINST_PROP_URL' : 
            case 'MUTUAL_FUND_URL'       : 
            case 'DIGITAL_GOLD_DASHBOARD': setSelectedSideBarMenu("product"); window.open(`${MY_ACCOUNT[actionType]}`, '_blank');break;
            default                      : setSelectedSideBarMenu("Support"); router.push(actionType);break;
        }
   }
   useEffect(() => {
       //router?.events?.on('routeChangeComplete',(url) => { getLeftMenuData(url);});
        getLeftMenuData(activeUrl);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
   },[activeUrl]);
   const handleScroll = () => {
        const headerElement = document.getElementById('mainSidebarSection');
        if(window.scrollY > 50 && headerElement && headerElement.classList != null) {
            setScrolledLeftMenu('scrolledLeftMenu');
        } else{
            setScrolledLeftMenu('');
        }
   }
 
   const getLeftMenuData = async(url)=> {
    switch(url){
        case '':
        case 'my-account':
        case 'dashboard':
        case 'my-account/dashboard':
        case 'support':
        case 'faqs':
        case 'query':  import("@constants/menu/myAccount").then(({en,hi}) => {setLeftMenuData(en?en:data)}); break;
        case '/'  :   
        default   :   import("@constants/menu/dashboard").then(({en,hi}) => {setLeftMenuData(en?en:data)}); break;

    }
    
   }



    return (<section className={`${styles.mainSidebarSection} ${styles[scrolledLeftMenu]} ${styles[props?.sourceComponent]}`} id="mainSidebarSection">
                <div className={styles.leftMenu}>
                    <ul className={styles._menuList}>
                        {leftMenuData?.map((items, index) => {
                            return (
                                <li key={`menuList${index}`} className={`${items.isActive ? styles["_active"] : ""} ${styles.list}`}>
                                    <div className={`${styles[items.icon]} ${selectedSideBarMenu?.toLowerCase() === items?.link?.toLowerCase() || selectedSideBarMenu?.toLowerCase() === items?.label?.toLowerCase() ? styles["_active"] : ""} ${items.dropdown?styles['arrow']:""} ${styles.inner}`} onClick={() => actionHandler(items.link,items)}>{items['label']?.toLowerCase()} </div>
                                    {items.dropdown &&
                                        <ul className={`${selectedSideBarMenu?.toLowerCase() === items?.label?.toLowerCase() ? styles["_active"] : ""} ${styles._dropdownList}`}>
                                            {items.dropdown.map((dropdownItems, index) => (
                                                <li key={`dropdownItems${index}`} className={`${dropdownItems.icon} ${styles._inner} ${styles._label}`} onClick={() => actionHandler(dropdownItems.link,dropdownItems)}>{dropdownItems.label?.toLowerCase()}</li>
                                            ))}
                                        </ul>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section> )
  };
  export default LeftMenu