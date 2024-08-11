import React, { } from 'react';
import CoreModal              from 'pages/coreUI/coreModal/CoreModal';
import Button                 from 'pages/coreUI/common/_button';
import Images                 from 'pages/coreUI/common/_image';
import './styles/RectificationModal.scss';;

function RectificationModal (props){
    const {actionHandler, }  = props; 
   
    return (
            <CoreModal
                isOpenModal       = {props?.isBookACallNowModal}
                customIdName      = {'RectificationModal'}
                customClassName   = {'RectificationModal fixedModal closeIconCenter'}
                callBackAction    = {() => actionHandler('closeModal',false)}
                modalHeading      = {""}
                disableBodyScroll = {true}
                closeCW           = {true}
                modalBody         = {                 
                    <div className={`RectificationModal`}>
                        <div className='_LogoTitle'><Images  height="auto" width="auto" lazy={false} src={`/images/icons/logo/CreditAdvisoryLogo.svg`}/></div>
                        <div className='_infoLogoTitle'>Benefits of resolving negative accounts:</div>
                        <ul className='_infoFeatures'>
                            <li>Low interest rate on loans</li>
                            <li>Greater chances of loans & cards approval</li>
                            <li>Higher limit on credit card</li>
                            <li>More negotiating power with the bank</li>
                        </ul>
                        <div className='offerValidStrip'><div className='infoText'>Offer vaild for limited period only</div></div>
                        <div className='serviceSection'>
                            <div className='serviceList'>
                                <div className='serviceName'>Credit Plus Services</div>
                                <div className='serviceAmount'>
                                    <div className="regularPrice">₹1299</div>
                                    <div className="offerPrice">₹ 999</div>
                                </div>
                            </div>
                            <div className='serviceList recommended'>
                                <div className='serviceName'>
                                    Credit Health Report
                                    <div className="discount">50% OFF </div>
                                </div>
                                <div className='serviceAmount'>
                                    <span className="_label">Recommended</span>
                                    <div className="regularPrice">₹1299</div>
                                    <div className="offerPrice">₹ 999</div>
                                </div>
                            </div>
                            <div className='serviceList totalPrice'>
                                <div className='serviceName'>
                                    Total Price
                                    <div className="_link" >View Breakup</div>
                                </div>
                                <div className='serviceAmount'>
                                    <div className="offerPrice">₹ 1298</div>
                                    <div className="regularPrice">( ₹999+299+GST )</div>
                                </div>
                            </div>


                        </div>                        
                        <div className='buttonContainer'>
                            <Button
                                className="btn continueToPayment"
                                btnClickHandler={() => actionHandler('continueToPayment', {})}
                                buttonText={'Continue to payment'}
                            />
                            <div className='_agreeLink'>By proceeding, you agree with our <a href='https://www.paisabazaar.com/terms-of-use'>T&C</a></div>
                        </div> 
                    </div>
                }
            />
        );
}


export default RectificationModal;
