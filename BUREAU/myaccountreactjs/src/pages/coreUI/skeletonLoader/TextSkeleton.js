import React, {  } from 'react';
import './styles/LoaderSkeleton.scss';

function TextSkeleton (props){
    const {className=""} = props;
    let splitUrl         = (window.location.pathname).split("/");
    let activeURL        = splitUrl[splitUrl.length - 1]; 
    return (
        <div className={`${className} ${activeURL} loaderSkeleton`}>
            <div className="c-skeleton__figure"></div>
        </div>
    );
}

export default TextSkeleton;