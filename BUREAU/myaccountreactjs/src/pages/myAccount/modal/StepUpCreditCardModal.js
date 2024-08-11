import React, {lazy } from 'react';
import './styles/StepUpCreditCardModal.scss';
const Button = lazy(() => import('pages/coreUI/common/_button'), { loading: () => 'Loading...', });
const Images = lazy(() => import('pages/coreUI/common/_image'), { loading: () => 'Loading...', });
const CoreModal = lazy(() => import('pages/coreUI/coreModal/CoreModal'), { loading: () => 'Loading...', });


function StepUpCreditCardModal (props){
    const {actionHandler, }  = props; 
   
    return (
            <CoreModal
                isOpenModal       = {props.isStepUpCardModal}
                customIdName      = {'StepUpCreditCardModal'}
                customClassName   = {'StepUpCreditCardModal fixedModal closeIconCenter'}
                callBackAction    = {() => actionHandler('closeModal',false)}
                modalHeading      = {""}
                disableBodyScroll = {true}
                closeCW           = {true}
                modalBody         = {                 
                    <div className={`StepUpCreditCardModal`}>
                        <div className='_LogoTitle'> <Images  height="30px" width="100px" lazy={false} src={`/images/icons/header/PBLogoSmall.svg`}/></div>
                        <div className='_infoTitle'>How Step Up card helps to increase score</div>
                        <ul className='_infoFeatures'>
                            <li>Get instant Virtual Card & Start Spending</li>
                            <li>Spend upto 50% of credit limit monthly</li>
                            <li>Pay bills timely & improve your Score within months</li>
                        </ul>
                        <div className='buttonContainer'>
                            <Button
                                className="btn knowMoreBtn"
                                btnClickHandler={() => actionHandler('stepUpCreditCardBannerKnowMore', {})}
                                buttonText={'Know more about SBM'}
                            />
                        </div> 
                    </div>
                }
            />
        );
}


export default StepUpCreditCardModal;
