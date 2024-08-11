import React from 'react';
import CoreModal              from 'pages/coreUI/coreModal/CoreModal';
import ScoreInfoText          from '../speedoMeter/ScoreInfoText';
import ScoreInfoMeter         from '../speedoMeter/ScoreInfoMeter';
import './styles/CreditScoreModal.scss';;

function CreditScoreModal (props){
    const {actionHandler}  = props; 
   
    return (
            <CoreModal
                isOpenModal       = {props.isCreditScoreModal}
                customIdName      = {'CreditScoreModal'}
                customClassName   = {'CreditScoreModal fixedModal closeIconCenter'}
                wrapperClass      = {"CreditScoreModal SlideCardFixed"}
                callBackAction    = {() => actionHandler('closeModal',false)}
                modalHeading      = {""}
                disableBodyScroll = {true}
                closeCW           = {true}
                modalBody         = {                 
                    <div className={`CreditScoreModal`}>
                        <ScoreInfoMeter {...props}/>                        
                        <ScoreInfoText {...props} />
                    </div>
                }
            />
        );
}


export default CreditScoreModal;
