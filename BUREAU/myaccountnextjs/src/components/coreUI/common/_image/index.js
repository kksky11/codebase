import React, { Fragment }      from "react";
import PropTypes                from "prop-types";
import LazyLoad                 from 'react-lazyload';
import './Image.scss';  

function Image (props) {
    const {lazy=true, offset=10, className,src, alt,...rest } = props;
    onerror=(e)=>{
        if(e.type === "error"){e.target.src = "/images/icons/NoImageFound.jpg"; e.target.alt={src}}
    };
    return(
            <Fragment>
                {lazy 
                    ? <LazyLoad offset={offset}>
                        <img src={src} className={`${className ? className : ""} img`} alt={alt ? alt : "_img"}  onError={(e)=>onerror(e)} {...rest}/> 
                    </LazyLoad>
                    : <img src={src} className={`${className ? className : ""} img`} alt={alt ? alt : "_img"}  onError={(e)=>onerror(e)} {...rest}/> 
                }
           </Fragment>
    );
}

Image.propTypes = {
    className               : PropTypes.string,
    src                     : PropTypes.string,
    alt                     : PropTypes.string
};

export default Image;
