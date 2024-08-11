import React, {  } from 'react';
import 'skeletonLoader/styles/LoaderSkeleton.scss';
import './styles/Alerts.scss';
function AlertListSkeleton (props){
    const { items = 1 } = props
    let count = []
    for (let i = 0; i < items; i++) {
        count.push(i)
    }
    return (
        <div className="loaderSkeleton">
            <div className="_commonSkeleton alertListWrapper">
                <div className='_infoHeading'>
                    <div className="c-skeleton__figure _title"></div>
                    <div className="c-skeleton__figure _subtitle"></div>
                </div>
                <div className='alertListContainer'>
                    {count.map((item, index) =>
                       <div className='alertList' key={`alertListSkeleton${index}`}>
                            <div className='iconContainer'><div className="c-skeleton__figure _icon"></div> </div> 
                            <div className='infoTextContainer'>
                                    <div className="c-skeleton__figure _title"></div>
                                    <div className="c-skeleton__figure _icon"></div>
                            </div>
                        </div>
                    )}
                </div>            
            </div>
        </div>
    );
}

export default AlertListSkeleton;