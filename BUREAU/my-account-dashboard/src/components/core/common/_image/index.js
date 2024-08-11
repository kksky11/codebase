import React      from "react";
import PropTypes                from "prop-types";
import './Image.scss';  

function Image (props) {
    const {className,src, alt,...rest } = props;
    // eslint-disable-next-line no-restricted-globals
    onerror=(e)=>{
        if(e.type === "error"){e.target.src = "/images/icons/NoImageFound.jpg"; e.target.alt={src}}
    };
    return(<img src={src} className={`${className ? className : ""} img`} alt={alt ? alt : "_img"}   {...rest}/>); //onError={(e)=> onerror(e)}
}

Image.propTypes = {
    className               : PropTypes.string,
    src                     : PropTypes.string,
    alt                     : PropTypes.string
};

export default Image;
