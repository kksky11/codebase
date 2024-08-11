import React, { Fragment }      from 'react';
import Button          from 'pages/coreUI/common/_button';
import Images          from 'pages/coreUI/common/_image'
import './styles/scoreInfoText.scss';
function ScoreInfoText(props){  
        const {bureauData, noScoreCriteria, actionHandler} = props;            
        return (
            <div className={`${noScoreCriteria ? "noScore" : ""} scoreInfoContainer`}>
                <div className="scoreBandDescription">
                 {bureauData && bureauData.scoreBandQuestion
                    ? <h3 className="question">{bureauData?.scoreBandQuestion}</h3>
                    : noScoreCriteria 
                        ? <h3 className="question">You are not eligible for a credit score! <Images lazy={false} src={`/images/icons/infoIcon.svg`} className="infoIcon"/></h3>
                        : null
                 }
                <p className="description">{bureauData?.scoreBandDescription}</p>
                </div>
                <div className="buttonContainer">
                {(props?.isTrend && !props?.isMobile ) || !props?.isTrend
                    ? <Fragment>
                        <Button
                            className="btn checkAllOffersBtn"
                            btnClickHandler={() => actionHandler('checkAllOffers', {})}
                            buttonText={'Check All Offers'}
                            btnLeftIcon
                            btnLeftIconSrc={'/images/scoreMeter/OffersIcon.svg'}
                            imgHeight={'16px'}
                            imgWidth={'16px'}
                        />
                        <div className="separator " />
                    </Fragment>
                    : null    
                }
               
                <Button
                    className="btn creditFactorsBtn"
                    btnClickHandler={() => actionHandler('creditFactors', {})}
                    buttonText={'Credit Factors'}
                    btnLeftIcon
                    btnLeftIconSrc={'/images/scoreMeter/creditFactors.svg'}
                    imgHeight={'16px'}
                    imgWidth={'16px'}
                />
               {props.isTrend &&
                <Fragment>
                    <div className="separator deskHide" />
                    <Button
                        className="btn scoreTrendBtn"
                        btnClickHandler={() => actionHandler('scoreTrend', true)}
                        buttonText={'Score Trend'}
                        btnLeftIcon
                        btnLeftIconSrc={'/images/scoreMeter/scoreTrend.svg'}
                        btnRightIcon
                        btnRightIconSrc={'/images/scoreMeter/rightArrow.svg'}
                        imgHeight={'16px'}
                        imgWidth={'16px'}
                    />
                    </Fragment>
                    }
                </div>
          </div>                       
          );
}

export default  ScoreInfoText;
