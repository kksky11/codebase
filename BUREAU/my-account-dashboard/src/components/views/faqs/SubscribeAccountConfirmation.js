import React, {useEffect, useState,Fragment } from 'react';
import underscore           from 'utils/paisabazaarUnderscore';
import utility              from 'utils/utility';
import CoreModal            from 'coreComponents/coreModal/CoreModal';
import Button               from 'coreComponents/common/_button';
import httpRequest          from 'utils/httpRequest';
import PaisaAnalytics       from 'utils/paisaAnalytics';
import * as ApiConstants    from 'constants/ApiConstants';
import * as BureauConstants from 'constants/BureauReportConstants';
import styles from './styles/ConfirmationModal.scss';

const propTypes     = {};

function SubscribeAccountConfirmation (props){
    const [accountResubscribeStatus, setAccountResubscribeStatus]   = useState(null);
    const [accountUnsubscribeStatus, setAccountUnsubscribeStatus]   = useState(null);
    const [isLoader, setIsLoader]   = useState(false);
    const {t, userProfileReducer,actionHandler, subscribeModal,resubscribeModal, updateSubscriptionStatus }  = props;
   // let subscriptionStatus = (utility.isEmpty(userProfileReducer) === false) && (utility.isEmpty(userProfileReducer.userData) === false) && (userProfileReducer.userData.subscription == 0) ? true : false;
    let visitId  = userProfileReducer.visitId;
    let userData = {
        mobileNumber: userProfileReducer.mobileNumber,
        customerId  : userProfileReducer.customerId
    };  
    let params = {
        customerId   : userProfileReducer.customerId,
        mobileNumber : userProfileReducer.mobileNumber
    };

    let SubscribeAccountModalData = {
        "title"          : "Unsubscribe!",
        "requestTitle"   : "Thankyou!",
        "errorTitle"     : "Opps!",
        "infoItext"      : "Are you sure you want to unsubscribe your Paisabazaar account? ",
        "requestInfoItext": "The request for unsubscription has been received. Please allow us 10 working days to process the same.",
        "errorInfoItext" : "Some error occured while unsubscribing your account. Please retry",
        "subTitle"       : "On unsubscription,",
        "benefits"       : ["Your monthly credit score will NOT be updated every month.","You will NOT receive further monthly updates of your credit score."],
        "buttonText"     : "Unsubscribe Account"

    }
    let ResubscribeAccountModalData = {
        "title"           : "Resubscribe!",
        "requestTitle"    : "Thankyou!",
        "errorTitle"      : "Opps!",
        "infoItext"       : "",
        "requestInfoItext": "You have been resubscribed for free monthly credit reports.",
        "errorInfoItext"  : "Some error occured while resubscribing your account",
        "subTitle"       : "Loading...",
        "benefits"       : [],
        "buttonText"      : ""

    }

    let modalData   = subscribeModal ? SubscribeAccountModalData : ResubscribeAccountModalData;
    let activeModal = subscribeModal ? accountUnsubscribeStatus : accountResubscribeStatus ; 
    let modalTitle = "";
    let buttonText = "";
    let infoText   = "";
    let statusClass   = "";
    if(activeModal === null){
        modalTitle = modalData.title;
        buttonText = modalData.buttonText; 
        infoText   = modalData.infoItext;
        statusClass   = "_info";    
    }else if(activeModal === true){
        modalTitle = modalData.requestTitle; 
        buttonText = "";
        infoText   = modalData.requestInfoItext;   
        statusClass   = "_success"
    }else{
        modalTitle = modalData.errorTitle; 
        buttonText = "Try Again";
        infoText   = modalData.errorInfoItext;   
        statusClass   = "_error"
    } 

    useEffect(() => { 
        if(resubscribeModal){
            setIsLoader(true);
            setTimeout(() => {
                resubscribeAccount();
            }, 2000);
        }       
    },[resubscribeModal]);
   
    const resubscribeAccount = () => {
        setAccountResubscribeStatus(true);      
        setIsLoader(true);
        PaisaAnalytics.collateTrackingData(ApiConstants.ANALYTICS_EVENTS.BU_CLICKED_RESUBSCRIBE,underscore.extend(userData,underscore.result(props, "utmData", {})));
        let APIURL = ApiConstants.SITE_PLATEFORM_URL + ApiConstants.RESUBSCRIBE_USER;
        httpRequest.call('POST',APIURL,{"Content-Type": "application/json; charset=utf-8"},params,'',(error, result, body)=>{
            if(error){setAccountResubscribeStatus(false);  setIsLoader(false);return;
            } else {
                setAccountResubscribeStatus(true);
                setTimeout(() => {
                    updateSubscriptionStatus(BureauConstants.SUBSCRIPTION_STATUS[BureauConstants.SUBSCRIBED_USER]);
                }, 2000);
                setIsLoader(false);
                PaisaAnalytics.collateTrackingData(ApiConstants.ANALYTICS_EVENTS.BU_VIEWED_SUCCESS_RESUBSCRIBE,underscore.extend(userData,underscore.result(props, "utmData", {})));
            }
        });
    };

    const unsubscribeAccount=(actionType)=>{        
        setIsLoader(true);
        PaisaAnalytics.collateTrackingData(actionType,underscore.extend(userData,underscore.result(props, "utmData", {})));
        let APIURL = ApiConstants.SITE_PLATEFORM_URL + ApiConstants.UNSUBSCRIBE_USER
        httpRequest.call('POST',APIURL,{"Content-Type": "application/json; charset=utf-8"},params,'', (error, result, body)=>{
                if(error){setAccountUnsubscribeStatus(false);setIsLoader(false);return;
                } else {
                    setAccountUnsubscribeStatus(true);
                    setTimeout(() => {
                        updateSubscriptionStatus(BureauConstants.SUBSCRIPTION_STATUS[BureauConstants.UNSUBSCRIBED_USER]);
                    }, 2000);
                    setIsLoader(false);
                    PaisaAnalytics.collateTrackingData(ApiConstants.ANALYTICS_EVENTS.BU_VIEWED_SUCCESS_UNSUBSCRIBE,underscore.extend(userData,underscore.result(props, "utmData", {})));
                }
            });
    };

    const clicHandler=(actionType, data)=>{
        (resubscribeModal) ? resubscribeAccount() : unsubscribeAccount();       
    }

      
    

    return (
            <CoreModal
                isOpenModal       = {resubscribeModal || subscribeModal}
                customClassName   = {'fixedModal faqsModal'}
                customIdName      = {'confirmationModal'}
                callBackAction    = {() => actionHandler('closeModal',false)}
                modalHeading      = {modalTitle}
                disableBodyScroll = {true}
                modalBody         = {                 
                   <div className={`${statusClass} confirmationModal`}>
                        {modalData && 
                            <Fragment>
                                {infoText && <div className="_infoText">{infoText}</div>}
                                { activeModal === null &&
                                <Fragment>
                                    <h5 className="_subTitle">{modalData.subTitle}</h5>
                                    <ul className="ul_decimal _list">
                                        {modalData.benefits && modalData.benefits.length>0 && modalData.benefits.map((item,i)=>{return (<li  key={item[i]}>{item}</li>)})}
                                    </ul>
                                </Fragment>
                                }
                               
                                {buttonText &&
                                <div className="buttonContainer">
                                    <Button 
                                        className      = {`pb-button btn btn-primary`} 
                                        btnClickHandler= {()=>clicHandler()}                   
                                        role           = "button" 
                                        type           = "button"
                                        aria-haspopup  = "true" 
                                        aria-expanded  = "false"
                                        aria-label     = "Center Align" 
                                        buttonText     = {buttonText}
                                        isLoading      = {isLoader}
                                        disabled       = {isLoader}
                                    />
                                </div>}
                            </Fragment>
                        }
                    </div> 
                }
            />
        );
}

SubscribeAccountConfirmation.propTypes = propTypes;


export default SubscribeAccountConfirmation;
