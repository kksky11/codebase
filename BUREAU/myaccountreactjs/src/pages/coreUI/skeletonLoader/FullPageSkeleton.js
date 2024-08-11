import React, {  } from 'react';
function FullPageSkeleton (props){
    const {className=""} = props;
    let splitUrl         = (window.location.pathname).split("/");
    let activeURL        = splitUrl[splitUrl.length - 1]; 
    return (
        <div className={`${className} ${activeURL} loaderSkeleton fullPageSkeleton`}>
            <div className="container">
                <div className="row screen_header">
                    <div className="c-skeleton_body">
                        <div className="c-skeleton__text"></div>
                    </div>
                </div>
                <div className="row screen_body">
                    <div className="screen_body_leftmenu">
                        <div className="c-skeleton_body">
                            <div className="c-skeleton__text"></div>
                        </div>
                    </div>
                    <div className="screen_body_content">
                        <div className="c-skeleton_body">
                            <div className="c-skeleton__text"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullPageSkeleton;