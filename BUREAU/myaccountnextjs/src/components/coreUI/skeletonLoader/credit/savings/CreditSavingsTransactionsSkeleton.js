import React, {  } from 'react';
import '../../styles/LoaderSkeleton.scss';
import './styles/Savings.scss';

function CreditSavingsTransactionsSkeleton (props){
    return (
        <div className="loaderSkeleton creditSavingstransactions">
            <div className="transactions _commonSkeleton">
                <div className="listContainer c-skeleton_body">
                    <div className="list c-skeleton__text"></div>
                    <div className="list c-skeleton__text"></div>
                    <div className="list c-skeleton__text"></div>
                    <div className="list c-skeleton__text"></div>
                </div>
            </div>
        </div>
    );
}

export default CreditSavingsTransactionsSkeleton;