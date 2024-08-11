import React, { Fragment, lazy}      from 'react';

import RectificationModal     from '../modal/RectificationModal';
import './styles/rectificationBanner.scss';
const Button = lazy(() => import('pages/coreUI/common/_button'), { loading: () => 'Loading...', });
const Images = lazy(() => import('pages/coreUI/common/_image'), { loading: () => 'Loading...', });

function RectificationBanner(props){ 
    const {isBookACallNowModal,actionHandler} = props;
       
    return (
        <Fragment>
            {isBookACallNowModal && <RectificationModal {...props}/>}
            <div className='RectificationBanner'>
                <div className='infoContainer'>
                    <div className='attention'><Images  height="38px" width="38px" lazy={false} src={`/images/icons/attentionIcon.svg`}/> 3 of your account are negatively impacting your credit score</div>
                    <div className='_LogoTitle'><Images  height="30px" width="140px" lazy={false} src={`/images/logo/CreditAdvisoryLogo.svg`}/></div>
                    <div className='_infoTitle'>Credit Plus members get expert guidance in closing negative accounts</div>
                    <ul className='_infoFeatures'>
                       <li>Personalized analysis by experts on your Credit Report </li>
                       <li>Tips on how to negotiate with bank for spacial offer and NOC letter</li>
                    </ul>
                </div>
                <div className='accountListSection'>
                    <h3 className='_title'>Your Accounts Covered under Credit Plus across bureaus</h3>
                    <div className='accountList'>
                        <div className='accountCard'>
                            <div className='cardBody'>
                                <div className='cardItem _name'       title="">
                                    <div className='bankLogo'><Images  height="28px" width="28px" lazy={false} src={`/images/bankLogos/bankIcon/axis_icon.svg`}/></div>
                                    <div className='bankInfo'>
                                        <div className='bankName'>Axis Bank</div>
                                        <div className='accountType' title="Personal Loan">XXXX 7729</div>
                                    </div>
                                </div>
                                <div className='cardItem _amount'     title="Outstanding Amount"><div><span>₹</span>98,500</div> </div>
                                <div className='cardItem _lastUpdate' title="Last updated on">26 May, 2021</div>
                                <div className='cardItem _payment'    title="Payment Delayed by">90 Days</div>
                            </div>
                            <div className='cardFooter'> </div> 
                        </div>

                        <div className='accountCard'>
                            <div className='cardBody'>
                                <div className='cardItem _name'       title="">
                                    <div className='bankLogo'><Images   height="28px" width="28px" lazy={false} src={`/images/bankLogos/bankIcon/hdfc_icon.svg`}/></div>
                                    <div className='bankInfo'>
                                        <div className='bankName'>HDFC Bank</div>
                                        <div className='accountType' title="Credit Card">XXXX 7729</div>
                                    </div>
                                </div>
                                <div className='cardItem _amount'     title="Outstanding Amount"><div><span>₹</span>5,15,000</div></div>
                                <div className='cardItem _lastUpdate' title="Last updated on">26 May, 2021</div>
                                <div className='cardItem _payment'    title="Payment Delayed by">120 Days</div>
                            </div>
                            <div className='cardFooter'> </div> 
                        </div>

                        <div className='accountCard'>
                            <div className='cardBody'>
                                <div className='cardItem _name'       title="">
                                    <div className='bankLogo'><Images   height="28px" width="28px" lazy={false} src={`/images/bankLogos/bankIcon/icici_icon.svg`}/></div>
                                    <div className='bankInfo'>
                                        <div className='bankName'>ICICI BANK</div>
                                        <div className='accountType' title="Credit Card">XXXX 7729</div>
                                    </div>
                                </div>
                                <div className='cardItem _amount'     title="Outstanding Amount"><div><span>₹</span>7,15,000</div></div>
                                <div className='cardItem _lastUpdate' title="Last updated on">26 May, 2021</div>
                                <div className='cardItem _payment'    title="Payment Delayed by">129 Days</div>
                            </div>
                            <div className='cardFooter'> </div> 
                        </div>
                    </div>
                </div>

                <div className='buttonContainer'>
                    <Button
                        className="btn bookACallNow"
                        btnClickHandler={() => actionHandler('bookACallNowModal', {})}
                        buttonText={'Book A Call Now'}
                    />
                   <div className='_agreeLink'>By subscribing to this service, you agree to the <a href='https://www.paisabazaar.com/terms-of-use' role="button">Terms & Conditions</a> and <a href='https://www.paisabazaar.com/terms-of-use' className="buttonContainer">Letter of Authority</a></div>
                </div>

            </div>
        </Fragment>
        );
}


export default  RectificationBanner;