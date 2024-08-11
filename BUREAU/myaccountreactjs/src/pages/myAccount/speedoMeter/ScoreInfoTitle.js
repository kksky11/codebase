import React, {Fragment } from 'react';
import Button             from 'pages/coreUI/common/_button';
import './styles/scoreInfoTitle.scss';
function ScoreInfoTitle(props){  
        const {noScoreCriteria, isDemandRefresh, score, activeBureau, firstName} = props;            
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const getCurrentUpdatedDate = () => {
          const lastUpdatedDate = score && score.lastUpdated ? score.lastUpdated : '';
          const reportDateArray = lastUpdatedDate.split('-');
          let lastUpdateOn = 'NA';
          if (lastUpdatedDate) {
            lastUpdateOn = `${month[parseInt(reportDateArray[1]) - 1]}' ${reportDateArray[2].slice(-2)}`;
          }
          return lastUpdateOn;
        }
        const nextReportDate = () => {
          let nextReportOn = 'NA';
          const nextReportDate = score && score.nextReportDate ? score.nextReportDate : '';
          const reportDateArray = nextReportDate.split('-');
          if (nextReportDate) { nextReportOn = `${parseInt(reportDateArray[0])} ${month[parseInt(reportDateArray[1]) - 1]}' ${reportDateArray[2].slice(-2)} ` }
          return nextReportOn;
        }
        return (
            <div className="userInfo">                    
                {noScoreCriteria
                ? <h2 className="user"><b>Hey {firstName || 'user'}!</b><span> {activeBureau} doesn’t have enough credit information about you to generate your score</span></h2>
                : <Fragment>
                    <h2 className="user"><b>Hey {firstName || 'user'}!</b><span> Here's your Credit Score for {getCurrentUpdatedDate()}</span></h2>
                    {isDemandRefresh
                            ? <div className="refresh">
                            <h3 className="refreshText">Updated score available</h3>
                            <Button
                                className="btn refreshBtn"
                                btnClickHandler={() => props?.actionHandler('refresh', {})}
                                buttonText={'Refresh Now'}
                            />
                            </div>
                            : <h3 className="nextReport"><span>Next report on:</span> <b>{nextReportDate()}</b></h3>
                        }
                    </Fragment>
                } 
            </div>                       
          );
}

export default  ScoreInfoTitle;