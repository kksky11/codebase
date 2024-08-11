import React, {} from 'react';
import CoreModal              from 'coreUI/coreModal/CoreModal';
import Button                 from 'coreUI/common/_button';
import Images                 from 'coreUI/common/_image';
import './styles/CreditAdvisoryModal.scss';;

function CreditAdvisoryModal (props){
    const {actionHandler, }  = props; 
   
    return (
            <CoreModal
                isOpenModal       = {props.isWhyIsItImportantInfoModal}
                customIdName      = {'CreditAdvisoryModal'}
                customClassName   = {'CreditAdvisoryModal fixedModal closeIconCenter'}
                callBackAction    = {() => actionHandler('closeModal',false)}
                modalHeading      = {""}
                disableBodyScroll = {true}
                closeCW           = {true}
                modalBody         = {                 
                    <div className={`CreditAdvisoryModal`}>
                        <div className='_LogoTitle'><Images  height="auto" width="auto" lazy={false} src={`/images/icons/logo/CreditAdvisoryLogo.svg`}/></div>
                        <div className='_infoLogoTitle'>Score improvement advisory</div>
                        <div className='_infoTitle'> Why is reaching a high credit score important?</div>
                        <ul className='_infoFeatures'>
                            <li>Low interest rate on loans</li>
                            <li>Greater chance of loans & cards approval</li>
                            <li>Higher limit on credit card</li>
                            <li>More negotiating power with the bank</li>
                        </ul>
                        <div className='buttonContainer'>
                            <Button
                                className="btn knowMoreBtn"
                                btnClickHandler={() => actionHandler('creditAdvisoryBannerKnowMore', {})}
                                buttonText={'Know More'}
                            />
                        </div> 
                    </div>
                }
            />
        );
}


export default CreditAdvisoryModal;
