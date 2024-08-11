import React, {  } from 'react';
import 'skeletonLoader/styles/LoaderSkeleton.scss';
import './styles/Savings.scss';
function TotalBalanceCardSkeleton (props){
    return (
        <div className="loaderSkeleton">
            <div className="_commonSkeleton cardWrapper">
                <div className="totalBalanceCardContainer"><div className="card"><div className="c-skeleton__figure "></div></div></div>            
            </div>
        </div>
    );
}

export default TotalBalanceCardSkeleton;