import React, {  } from 'react';
import './styles/LoaderSkeleton.scss';

function PersonalDetails (props){
    return (
        <div className="loaderSkeleton PersonalDetailsSkeleton">
           <div className="tabHeading">
                <div className="c-skeleton__text"></div>
                <div className="c-skeleton__text"></div>
            </div>
            <div className="tabData">
                <div className="c-skeleton__figure "></div>
                <div className="c-skeleton__figure "></div>
                <div className="c-skeleton__figure "></div>
                <div className="c-skeleton__figure "></div>
                <div className="c-skeleton__figure "></div>
                <div className="c-skeleton__figure "></div>
            </div>
        </div>
    );
}

export default PersonalDetails;