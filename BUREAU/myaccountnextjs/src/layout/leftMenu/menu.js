import React, {Fragment,useEffect, useState } from 'react';
import { withNamespaces }  from 'react-i18next';
// import underscore                    from "utils/Underscore";
// import httpRequest                   from 'utils/httpRequest';
// import Analytics                     from 'analytics';
// import utility              	       from 'utils/Utility';
// import * as RouterConstants          from 'constants/RouterConstants';
// import * as ApiConstants             from 'constants/ApiConstants';
import Link from 'next/link';

const LeftMenu = ({}) => {
    const [leftMenuState, setLeftMenuState] = useState({
        lifetimeBalance   : 0,
        selectedSideBarMenu: "My Account",
        activeURL          : null,
    });

    // useEffect(() => {       
    //     init();
    // },[]);

    // const init=()=>{  
    //     window.innerWidth > 767 && window.addEventListener('scroll', handleScroll, true);
    //     let splitUrl      = (window.location.pathname).split("/");
    //     let activeURL     = splitUrl[splitUrl.length - 1];
    //     if(activeURL.includes("support")){
    //       setLeftMenuState({...leftMenuState, selectedSideBarMenu:"Support", activeURL:activeURL});
    //     }else if(activeURL.includes("settings")){
    //       setLeftMenuState({...leftMenuState, selectedSideBarMenu:"Settings", activeURL:activeURL});
    //     }else{
    //       setLeftMenuState({...leftMenuState, selectedSideBarMenu:"My Account", activeURL:activeURL});
    //     }        
    // }

    const actionHandler=(actionType, data)=>{  
      // data && data.label ? Analytics.sendDataToGTM('clicked',data.label,GAPageCategory,{productName:data.label, page:data.label}) : null; 
     
        switch(actionType){
            case 'dropdown'    : selectedMenu(data);  break;
            case 'HOME'        :  break;
            case "dashboard"   :                          
            case 'MY_ACCOUNT'  :  break;
            case 'BUREAU_HOME_PAGE': 
            case 'CREDIT_SCORE':   break;
            case 'SETTING'     :   break;
            case 'faq'         : 
            case 'query'       : 
            case 'contact'     : setLeftMenuState({...leftMenuState,selectedSideBarMenu:"Support" }); break;
            //default: window.open(`${ApiConstants['ENV_CONFIG'].MY_ACCOUNT[actionType]}?utm_source=${utmSource}`, '_blank');  break;
        }
    }
    
    const handleScroll = () => {
        const headerElememt = document.getElementById('mainSidebarSection');
        if(window.scrollY > 50 && headerElememt && headerElememt.classList != null) {
          headerElememt.classList.add('scrolledLeftMenu');
        } else if(headerElememt && headerElememt.classList != null && headerElememt.classList.contains('scrolledLeftMenu')) {
         headerElememt.classList.remove('scrolledLeftMenu');
        }
    }

    let sideBarMenuData = [
        {"label": "My Account", "icon": "myAccount", "link": "MY_ACCOUNT", "isActive": true
        },{
            "label": "Products", "icon": "product", "link": "dropdown", "isActive": true,
            "dropdown": [
                { "label": "Credit Report", "icon": "", "link": "BUREAU_HOME_PAGE", "isActive": true },
                { "label": "Personal Loan", "icon": "", "link": "PERSONAL_LOAN_URL", "isActive": true },
                { "label": "Business Loan", "icon": "", "link": "BUSINESS_LOAN_URL", "isActive": true },
                { "label": "Credit Card", "icon": "", "link": "CREDIT_CARD_URL", "isActive": true },
                { "label": "Home Loan", "icon": "", "link": "HOME_LOAN_URL", "isActive": true },
                { "label": "Loan Against Property", "icon": "", "link": "LOAN_AGAINST_PROP_URL", "isActive": true },
                { "label": "Mutual Fund", "icon": "", "link": "MUTUAL_FUND_URL", "isActive": true },
                { "label": "Digital Gold", "icon": "", "link": "DIGITAL_GOLD_DASHBOARD", "isActive": true }
            ]
        },{
            "label": "Rewards Offers", "icon": "Offer", "link": "dropdown", "isActive":false,
            "dropdown": [
                { "label": "Paisa Rewards", "icon": "", "link": "REWARD", "isActive": true }
            ]
        },{
            "label": "Support", "icon": "support", "link": "dropdown", "isActive": true,
            "dropdown": [
                { "label": "FAQs", "icon": "", "link": "faq", "isActive": true },
                { "label": "Submit a Query", "icon": "", "link": "query", "isActive": true },
                { "label": "Contact Us", "icon": "", "link": "contact", "isActive": true }
            ]
        },{ "label": "Settings", "icon": "settings", "link": "SETTING", "isActive":true}       
    ];

    return (
        <Fragment>               
            <div className="sideNav leftMenu v2">
                <ul className='_menuList'>
                    {sideBarMenuData.map((items, index) => {
                        return (
                            <li key={`menuList${index}`} className={`${items.isActive ? "_active" : ""}`}>
                                <div className={`${items.icon} ${leftMenuState.selectedSideBarMenu == items.label ? "_active" : ""} ${items.dropdown?"arrow":""} _inner _label`} onClick={() => actionHandler(items.link, items)}><Link>{items.label}</Link></div>
                                {items.dropdown &&
                                    <ul className={`${leftMenuState.selectedSideBarMenu == items.label ? "_active" : ""} _dropdownList`}>
                                        {items.dropdown.map((dropdownItems, index) => (
                                            <li key={`dropdownItems${index}`} className={`${dropdownItems.icon} _inner _label`} onClick={() => actionHandler(dropdownItems.link, dropdownItems)}><Link>{dropdownItems.label}</Link></li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        )
                    })}
                </ul>
            </div> 
        </Fragment>
    );
}
export default LeftMenu;


