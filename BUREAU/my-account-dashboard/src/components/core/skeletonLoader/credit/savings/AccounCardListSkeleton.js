import React, {  } from 'react';
import 'skeletonLoader/styles/LoaderSkeleton.scss';
import './styles/Savings.scss';
function AccounCardListSkeleton (props){
    return (
        <div className="loaderSkeleton">
            <div className="_commonSkeleton cardWrapper">
                <div className="cardContainer"><div className="c-skeleton__figure "></div></div>               
                <div className="cardContainer"><div className="c-skeleton__figure "></div></div>             
            </div>
        </div>
    );
}

export default AccounCardListSkeleton;