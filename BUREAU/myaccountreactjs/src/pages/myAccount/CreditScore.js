import React, { Fragment }    from 'react';
// import SlideCard              from "coreUI/common/_Slide";
// import Trends                 from './trends';
import SpeedoMeter            from './speedoMeter';
import BureauTab              from 'pages/coreUI/customTab/BureauTab';
import CreditScoreModal       from './modal/CreditScoreModal';
//import DownloadReportModal    from 'components/reportAnalysis/DownloadReportModal';
import './styles/creditScore.scss';
function CreditScore(props) {
  
  return (
    <Fragment>    
      {props?.isCreditScoreModal    && <CreditScoreModal {...props} /> }  
      {/* {props?.isDownloadReportModal && <DownloadReportModal  {...props} isReportDownloadModalOpen  = {props?.isDownloadReportModal} /> }   */}

      <div className="CreditScore">
          <BureauTab 
                {...props}
                tabContent={
                  <Fragment>
                     <SpeedoMeter {...props} />
                      {/* {props?.isScoreTrendSection 
                        ? <SlideCard slideDirection="left"><Trends {...props} /></SlideCard>
                        : <SlideCard slideDirection="right"><SpeedoMeter {...props} /></SlideCard>
                      } */}
                  </Fragment>
                }
          />
        </div>
    </Fragment>
  );
}

export default CreditScore;
