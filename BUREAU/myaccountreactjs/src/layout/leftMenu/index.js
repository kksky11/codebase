import React, { useState, useEffect } from 'react';
import { getCurrentURL } from "coreApp/utility";
import { MY_ACCOUNT,MY_PRODUCT}       from "coreApp/constants/strings";
import { useNavigate } from "react-router-dom";
import "./styles/leftMenu.scss"
import { useSelector, useDispatch } from 'react-redux';
import { setActiveLeftMenu, selectsActiveLeftMenu } from 'store/slices/myAccountSlice';

const LeftMenu = (props) => {
    const dispatch = useDispatch();
    const activeLeftMenu = useSelector(selectsActiveLeftMenu); 
    const navigate = useNavigate();
    const [selectedSideBarMenu, setSelectedSideBarMenu] = useState('/my-account/dashboard');
    const [scrolledLeftMenu, setScrolledLeftMenu] = useState('');
    const [leftMenuData, setLeftMenuData] = useState([]);
    let activeUrl = getCurrentURL();


    const actionHandler = (actionType, data) => {
        dispatch(setActiveLeftMenu(actionType));
        switch (actionType) {
            case 'dropdown'              : setSelectedSideBarMenu(MY_PRODUCT[data?.label]); break;
            case '/my-account/dashboard' : navigate(actionType);  setSelectedSideBarMenu(actionType); break;
            case 'CREDIT_BUREAU'         : 
            case 'CREDIT_CARD_URL'       : 
            case 'HOME_LOAN_URL'         : 
            case 'PERSONAL_LOAN_URL'     : 
            case 'BUSINESS_LOAN_URL'     : 
            case 'LOAN_AGAINST_PROP_URL' : 
            case 'MUTUAL_FUND_URL'       : 
            case 'DIGITAL_GOLD_DASHBOARD': setSelectedSideBarMenu("Product"); window.open(`${MY_ACCOUNT[actionType]}`, '_blank');break;
            default                      : setSelectedSideBarMenu("Support"); navigate(actionType);break;
        }
    }
    useEffect(() => {
        getLeftMenuData(activeUrl);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeUrl,activeLeftMenu]);

    const handleScroll = () => {
        const headerElement = document.getElementById('mainSidebarSection');
        if (window.scrollY > 50 && headerElement && headerElement.classList != null) {
            setScrolledLeftMenu('scrolledLeftMenu');
        } else {
            setScrolledLeftMenu('');
        }
    }

    const getLeftMenuData = async (url) => {
        switch (url) {
            case '':
            case 'my-account':
            case 'dashboard':
            case 'my-account/dashboard':
            case 'support':
            case 'faqs':
            case 'query':
            case 'contact-us': import("coreApp/constants/menu/myAccount").then(({ en, hi }) => { setLeftMenuData(en) }); break;
           
            default: import("coreApp/constants/menu/dashboard").then(({ en, hi }) => { setLeftMenuData(en) }); break;

        }

    }



    return (<section className={`mainSidebarSection ${scrolledLeftMenu}`} id="mainSidebarSection">
        <ul className={"_menuList"}>
            {leftMenuData?.map((items, index) => {
                return (
                    <li key={`menuList${index}`} className={`${items.isActive ? "_active" : ""} list`}>
                        <div className={`${items.icon} ${selectedSideBarMenu?.toLowerCase() === items?.link?.toLowerCase() || selectedSideBarMenu?.toLowerCase() === items?.label?.toLowerCase() ? "_active" : ""} ${items.dropdown ? 'arrow' : ""} inner`} onClick={() => actionHandler(items.link, items)}>{items['label']?.toLowerCase()} </div>
                            {items.dropdown &&
                            <ul className={`${selectedSideBarMenu?.toLowerCase() === items?.label?.toLowerCase() ? "_active" : ""} _dropdownList`}>
                                {items?.dropdown.map((dropdownItems, index) => (
                                    <li key={`dropdownItems${index}`} className={`${dropdownItems?.icon} _inner _label`} onClick={() => actionHandler(dropdownItems?.link, dropdownItems)}>{dropdownItems?.label?.toLowerCase()}</li>
                                ))}
                            </ul>
                        }
                    </li>
                )
            })}
        </ul>
    </section>)
};
export default LeftMenu