import * as React from "react";
//import { Link }       from "react-router-dom";
import logo from '@public/images/header/PaisabazaarLogo.svg';
import PropTypes      from "prop-types";
import  './logo.module.scss';
function Logo ({className,src, alt,...rest }) {
    const onerror=(e)=>{
        if(e.type === "error"){e.target.src = "/images/icons/NoImageFound.jpg";}
    };
    return(
        //    <Link href="/" passHref>
                <div className={"siteLogo"} >
                    <img  src={src ? src : logo } width={175} height={29} className={`${className ? className : ""} Logo`} alt={alt ? alt : "Logo"}  onError={(e)=>onerror(e)} {...rest}/> 
                </div>
            // </Link>
           );
}

Logo.propTypes = {
    className               : PropTypes.string,
    src                     : PropTypes.string,
    alt                     : PropTypes.string
};

export default Logo;

