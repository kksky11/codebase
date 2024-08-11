import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/header.scss"
function HeaderPage(props) {
    const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
    const navigate = useNavigate();
    const actionHandler = (url, data) => {
        navigate(url);
    }
    return (
        <div className="headerContainer">
            <header className="headerWrapper">
                <div className="LogoContainer">
                    <div className="hamburger_icon_parent" onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}>
                        <img src="/images/leftMenu/menu_icon.svg" className="hamburger_icon" height={30} width={30} alt="hamburger_icon" />
                    </div>
                    <img src="/images/header/PaisabazaarLogo.svg" className="pbLogo" height={32} width={179} alt="PBLogo" />
                </div>
                <div className="actionContainer">
                    {/* <nav className="nav">
                        <ul className="link">
                            <li className="list"> </li>
                        </ul>
                    </nav> */}
                    <button onClick={()=>actionHandler("apply")} className="login _button">Login</button>
                </div>
            </header>
        </div>
    )
}

export default HeaderPage