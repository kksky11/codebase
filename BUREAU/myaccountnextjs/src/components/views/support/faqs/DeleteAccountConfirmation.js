import React, {useEffect, useState,Fragment } from 'react';
import underscore           from 'utils/paisabazaarUnderscore';
import CoreModal            from 'coreComponents/coreModal/CoreModal';
import Button               from 'coreComponents/common/_button';
import httpRequest          from 'utils/httpRequest';
import PaisaAnalytics       from 'utils/paisaAnalytics';
import * as ApiConstants    from 'constants/ApiConstants';
import styles from './styles/ConfirmationModal.scss';

const defaultProps  = {};
const propTypes     = {};

function DeleteAccountConfirmation (props){
    const [accountDeletionStatus, setAccountDeletionStatus]   = useState(null);
    const [isLoader, setIsLoader]   = useState(false);
    const { userProfileReducer,actionHandler, accountDeleteModal }  = props;
    let visitId  = userProfileReducer.visitId;
    let userData = {
        mobileNumber: userProfileReducer.mobileNumber,
        customerId  : userProfileReducer.customerId
    };  
    let params = {
        customerId   : userProfileReducer.customerId,
        mobileNumber : userProfileReducer.mobileNumber
    };
   

    const deleteAccount=()=>{
        setIsLoader(true);
        let actionType = accountDeletionStatus === null ? ApiConstants.ANALYTICS_EVENTS.BU_CLICKED_CONFIRM_DELETE : ApiConstants.ANALYTICS_EVENTS.BU_CLICKED_RETRY_DELETE;             
        PaisaAnalytics.collateTrackingData(actionType,underscore.extend(userData,underscore.result(props, "utmData", {})));
        let APIURL = ApiConstants.SITE_PLATEFORM_URL + ApiConstants.DELETE_ACCOUNT_DETAILS
        httpRequest.call('POST',APIURL, {"Content-Type": "application/json; charset=utf-8"}, params,'',(error, result, body)=>{
                if(error){setAccountDeletionStatus(false);setIsLoader(false);return;
                } else {
                    setAccountDeletionStatus(true);
                    PaisaAnalytics.collateTrackingData(ApiConstants.ANALYTICS_EVENTS.BU_VIEWED_SUCCESS_DELETE,underscore.extend(userData,underscore.result(props, "utmData", {})));
                    setTimeout(() => {
                        let button = document.getElementsByClassName("logout-btn");
                        button[0].click();
                    }, 2000);
                    setIsLoader(false);
                }
            });
    }; 
    
    let modalData  = {
        "title"          : "Are you sure you want to delete your Paisabazaar account?",
        "requestTitle"   : "Thankyou!",
        "errorTitle"     : "Opps!",
        "errorInfoItext" : "Some error occured while account deletion",
        "infoItext"      : "The request for deletion has been received. Please allow us 10 working days to process the same.",
        "subTitle"       : "On deletion,",
        "benefits"       : ["Your past report(s) will no longer be available.","You will NOT receive further monthly updates of your credit score."]       
    }; 
    let modalTitle = "";
    let buttonText = "";
    let statusClass   = "";
    if(accountDeletionStatus === null){
        modalTitle = modalData.title;
        buttonText = "Delete Account";
        statusClass   = "_info";      
    }else if(accountDeletionStatus === true){
        modalTitle = modalData.requestTitle;; 
        buttonText = "";
        statusClass   = "_success"
    }else{
        modalTitle = modalData.errorTitle; 
        buttonText = "Try Again";
        statusClass   = "_error"
    }
    let buttonText1 = "No, Keep my data";
    
    return (
            <CoreModal
                isOpenModal       = {accountDeleteModal}
                customClassName   = {'fixedModal'}
                customIdName      = {'confirmationModal'}
                callBackAction    = {() => actionHandler('closeModal',false)}
                modalHeading      = {modalTitle}
                disableBodyScroll = {false}
                modalBody         = {                 
                    <div className={`${statusClass} confirmationModal`}>
                       {modalData && accountDeletionStatus === null && 
                       <Fragment> 
                           <h5 className="_subTitle">{modalData.subTitle}</h5>
                           <ul className="ul_decimal _list">
                               {modalData.benefits &&  modalData.benefits.map((item,i)=>{return (<li  key={item[i]}>{item}</li>)})}
                           </ul>                                                              
                        </Fragment>
                       }
                       {accountDeletionStatus  &&  <h5 className="_infoText">{modalData.infoItext}</h5>}                     
                       {accountDeletionStatus == false &&  <h5 className="_infoText">{modalData.errorInfoItext}</h5>}                     
                       {buttonText &&
                         <div className="buttonContainer">
                            <Button 
                                className="pb-button deleteAccountBtn btn btn-primary" 
                                btnClickHandler={()=>deleteAccount()}                   
                                role="button" 
                                type="button"
                                aria-haspopup="true" 
                                aria-expanded="false"
                                aria-label="Center Align" 
                                data-inline="true"
                                buttonText={buttonText}
                                isLoading      = {isLoader}
                                disabled       = {isLoader}
                            />
                            <Button 
                                className="pb-button keepMyDataBtn btn btn-primary v1" 
                                btnClickHandler={() => actionHandler('closeModal',true )}
                                role="button" 
                                type="button"
                                buttonText={buttonText1}
                            />
                        </div>}
                    </div>
                }
            />
        );
}

DeleteAccountConfirmation.propTypes = propTypes;


export default DeleteAccountConfirmation;
