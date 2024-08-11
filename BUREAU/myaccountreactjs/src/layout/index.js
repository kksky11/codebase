import React,{lazy, Suspense} from "react";
import { getCurrentURL}       from "../coreApp/utility";
import "./layout.scss"
import FullPageSkeleton from 'pages/coreUI/skeletonLoader/FullPageSkeleton';
const Header = lazy(() => import('./header'));
const LeftMenu = lazy(() => import('./leftMenu'));

function Layout(props) {
    const {leftMenu = true, activeURL=getCurrentURL()} = props;
    return (
        <Suspense fallback={<FullPageSkeleton />}>
            <div className={`${getCurrentURL()} wrapperLayout`}>
               {activeURL !== "apply" && <Header {...props}/>}
                <div className={`${leftMenu ? "" : "fullPage"  } mainContainerLayout`} id='mainContainerLayout'>
                  { leftMenu && <LeftMenu {...props}/>}
                    <div className="mainContentSection">{props.children} </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Layout