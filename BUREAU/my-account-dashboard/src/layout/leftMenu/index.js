/* eslint-disable eqeqeq */
import React, { lazy, useState, useEffect } from 'react';
import './leftMenu.scss';
//import myAccount from '@public/images/leftMenu/menu_icon.svg';
//import { useRouter } from 'next/router';
const Image = lazy(() => import('@coreComponents/common/_image'), { loading: () => '', });
const LeftMenu = (props) => {
    //const router = useRouter();
    const [selectedSideBarMenu, setSelectedSideBarMenu] = useState('myAccount');
    const [scrolledLeftMenu, setScrolledLeftMenu] = useState('');
    const [leftMenuData, setLeftMenuData] = useState([]);

    const actionHandler = (actionType, data) => {
        let link = actionType != 'myAccount' ? `/${actionType}` : '/'
        switch (actionType) {
            case 'dropdown': setSelectedSideBarMenu(link); break;
            case 'support':
            case 'contact-us':
            case 'query':  setSelectedSideBarMenu("support"); break; //router.push('/contact-us');
            default: //router.push(link);
        }
    }
    useEffect(() => {
        getLeftMenuData("/my-account");
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            case '/my-account':
            case '/my-account/dashboard':
            case '/support':
            case '/faqs':
            case '/query':
            case '/contact-us': import("@constants/menu/myAccount").then(({ en, hi }) => { setLeftMenuData(en) }); break;
            case '/':
            default: import("@constants/menu/dashboard").then(({ en, hi }) => { setLeftMenuData(en) }); break;

        }

    }



    return (<section className={`${"mainSidebarSection"} ${scrolledLeftMenu}`} id="mainSidebarSection">
        <div className={"leftMenu"}>
            <ul className={"_menuList"}>
                {leftMenuData?.map((items, index) => {
                    return (
                        <li key={`menuList${index}`} className={`${items.isActive ? "_active" : ""} list`}>
                            <div className={`${items.icon} ${selectedSideBarMenu == items.link ? "_active" : ""} ${items.dropdown ? 'arrow' : ""} inner`} onClick={() => actionHandler(items.link, items)}>
                                <div className='imageContainer'><Image src={`/images/header/hamburger/${items.icon}.svg`} className={"hamburger_icon"} height={32} width={32} alt={items.icon} /> </div>
                                {items['label']?.toLowerCase()} 
                            </div>
                            {items.dropdown &&
                                <ul className={`${selectedSideBarMenu == items.label ? "_active" : ""} _dropdownList`}>
                                    {items.dropdown.map((dropdownItems, index) => (
                                        <li key={`dropdownItems${index}`} className={`${dropdownItems.icon} _inner _label`} onClick={() => actionHandler(dropdownItems.link, dropdownItems)}>{dropdownItems.label?.toLowerCase()}</li>
                                    ))}
                                </ul>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>)
};
export default LeftMenu