
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image   from 'next/image';
import dynamic from 'next/dynamic';
import styles  from './header.module.scss';
const Logo = dynamic(() => import('@coreComponents/common/logo'), {loading: () => '',});
const Button = dynamic(() => import('@coreComponents/common/_button'), {loading: () => '',});
const LeftMenu = dynamic(() => import('@layout/leftMenu'), { loading: () => '', });
import { getIsMobile } from '@utils/utility';
 const Header = (props) => {
  const isMobile = getIsMobile();
  const router = useRouter();
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const [userName, setUserName] = useState("User");

    const actionHandler=(type,data)=>{  
      switch(type){    
          case 'login'          : router.push('/login'); break;
          case 'logout'         :  
          case 'logoutAll'      : logoutSession(data);  break;
          default:break;
      } 
    }

    const logoutSession=(data)=>{
      router.push('/')
    }

    return (
      <div className={styles.headerContainer}>
        <header className={styles.headerWrapper}>
            <div className={styles.LogoContainer}>
                <div className={styles.hamburger_icon_parent} onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}>
                    <Image src="/images/leftMenu/menu_icon.svg" className={styles.hamburger_icon} height={32} width={32} alt="hamburger_icon"  /> 
                </div> 
                <Logo /> 
            </div>
            <div className={styles.actionContainer}> 
            <nav className={styles.nav}>
                <ul className={styles.link}>
                  <li className={styles.list}><Button btnClickHandler={()=>actionHandler("login")} className={"login"} buttonText="Login" /></li>
                </ul>
              </nav>
            </div>
        </header>
        {(isHamburgerMenu && isMobile) &&
        <div className={`${styles.hamburgerMenu} ${isHamburgerMenu ? styles['active'] : ""}`}>
          <div className={styles.overlay} onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}></div>

          <div className={styles.hamburgerMenuHeader}>
            <div className={styles.logoContainer}>
              <div className={styles.pageTagWrapper}>
                <Image src="/images/header/PaisabazaarLogo.svg" className={styles.logo} height={32} width={100} alt="logo" />
                <div className={styles.pageTag}>{props.pageTag}</div>
              </div>
              <Image src="/images/header/closeIcon.svg" className={styles.closeIcon} height={16} width={16} onClick={() => setIsHamburgerMenu(!isHamburgerMenu)} alt="closeIcon" />
            </div>
            <div className={styles.userContainer}>
              <Image src="/images/myProfile/userName.svg" className={styles.userIcon} height={24} width={24}  alt="userName"/>
              <div className={styles.userName}>{userName}</div>
            </div>
          </div>

          <LeftMenu {...props} sourceComponent={"hamburgerMenuList"} />
        </div>
      }
      </div>
     
    );
  };
  export default Header



