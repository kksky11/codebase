import React, { lazy,useState } from 'react';
import  './header.scss';
import hamburgerIcon from '/images/leftMenu/menu_icon.svg';
//import { getIsMobile } from '@utility/utility';
const Image = lazy(() => import('../../../components/coreComponents/common/_image'), { loading: () => '', });
const Logo = lazy(() => import('../../../coreComponents/common/logo'), { loading: () => '', });
const Button = lazy(() => import('../../../coreComponents/common/_button'), { loading: () => '', });
const LeftMenu = lazy(() => import('../leftMenu'), { loading: () => '', });
const Header = (props) => {
  const isMobile =  false //getIsMobile();
  const router = ""//useRouter();
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  //const [userName, setUserName] = useState("Admin");

  const actionHandler = (type, data) => {
    switch (type) {
      case 'login': router.push('/login'); break;
      case 'logout':
      case 'logoutAll': logoutSession(data); break;
      default: break;
    }
  }

  const logoutSession = (data) => {
    router.push('/')
  }

  return (
    <div className={"headerContainer"}>
      <header className={"headerWrapper"}>
        <div className={"LogoContainer"}>
          <div className={"hamburger_icon_parent"} onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}>
            <Image src={hamburgerIcon} className={"hamburger_icon"} height={32} width={32} alt="hamburger_icon" />
          </div>
          <Logo />
        </div>
        <div className={"actionContainer"}>
          <nav className={"nav"}>
            <ul className={"link"}>
              <li className={"list"}><Button btnClickHandler={() => actionHandler("login")} className={"login"} buttonText="Login" /></li>
            </ul>
          </nav>
        </div>
      </header>
      {(isHamburgerMenu && isMobile) &&
        <div className={`hamburgerMenu ${isHamburgerMenu ? 'active' : ""}`}>
          <div className={"overlay"} onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}></div>

          <div className={"hamburgerMenuHeader"}>
            <div className={"logoContainer"}>
              <div className={"pageTagWrapper"}>
                <Image src="/images/header/PaisabazaarLogo.svg" className={"logo"} height={32} width={100} alt="logo" />
                <div className={"pageTag"}>{props.pageTag}</div>
              </div>
              <Image src="/images/header/closeIcon.svg" className={"closeIcon"} height={16} width={16} onClick={() => setIsHamburgerMenu(!isHamburgerMenu)} alt="closeIcon" />
            </div>
            <div className={"userContainer"}>
              <Image src="/images/myProfile/userName.svg" className={"userIcon"} height={24} width={24} alt="userName" />
              <div className={"userName"}>{props?.userName || "User" }</div>
            </div>
          </div>

          <LeftMenu {...props} className={"hamburgerMenuList"} />
        </div>
      }
    </div>

  );
};
export default Header



