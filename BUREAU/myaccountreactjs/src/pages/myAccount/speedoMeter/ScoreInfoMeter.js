import React, {useEffect, Fragment }      from 'react';
import Images                   from 'pages/coreUI/common/_image'
import CountUpAnimation         from 'pages/coreUI/countUpAnimation';
import './styles/scoreInfoMeter.scss';
function ScoreInfoMeter(props){ 
        const {bureauData, noScoreCriteria, actionHandler,  activeBureau} = props;            
        const scoreBand = bureauData?.scoreBand?.toLowerCase() || '';
        let scoreVal    = parseInt(bureauData?.score);
        let maxVal      = 900;
        let minVal      = 300;
        let maxDeg      = 190;
        let scoreDeg    = Math.round(((scoreVal - minVal)/(maxVal-minVal))*maxDeg);
        useEffect(() => {
        }, [activeBureau, scoreDeg])
       
        return (
            <div className={`${noScoreCriteria ? "noScore" : ""} scoreMeter`} onClick={()=>actionHandler("creditScoreModal")} >                
              { !noScoreCriteria &&
               <Fragment>
                    <div className={`meterArrow score-${scoreDeg}`} data-deg={`${scoreDeg}deg`}/>
                    <div className="meterScore">
                        <div className="score"><CountUpAnimation duration={1000}>{scoreVal}</CountUpAnimation> </div>
                        <div className={`scoreBand ${scoreBand}`}>{scoreBand}  <Images height="10px" width="10px" lazy={false} src={`/images/icons/infoIcon.svg`}/> </div>                    
                    </div>
               </Fragment>
               }
            </div>                       
          );
}

export default  ScoreInfoMeter;