/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from 'react';
//import * as ApiConstants from 'coreApp/constants/ApiConstants'

function DashboardTnC (props){
    // const {clickHandler, showTncThroughPuckar, userProfileReducer} = props;
    // const [dashboardTnCState, setDashboardTnCState] = useState({isInitialized: false});     
    // useEffect(() => {
    //     let s  = document.createElement("script");
    //     document.getElementsByTagName("body")[0].appendChild(s);
    //     s.src = `${ApiConstants.PUCKAR_URL}${ApiConstants?.PUCKAR_LIB_API}`;
    //     s.onload = ()=> {insertScript();}
    // }, []);
    
    // const insertScript=()=>{
    //     showTncThroughPuckar && window.paisabazaarContract(
    //         {
    //             contractId : ApiConstants?.PUCKAR_DASHBOARD_CONTRACT_ID,
    //             customerId : props?.userProfileReducer?.customerId || ""
    //         },"dashboardTnc",(error,isResponsed,isVerified,doShow,doConfirm,doCancel)=>{                
    //             if(error === true){return;}
    //             if(isVerified){clickHandler();
    //             }else{
    //                 doShow();
    //                 let element = document.getElementById('dashboardTncBtn');
    //                 element.addEventListener('click', closeTnCBanner, true)
    //             }
    //             setDashboardTnCState({...dashboardTnCState,isResponsed,isVerified,doShow,doConfirm,doCancel,isInitialized:true });
    //         });
    // }
    // const closeTnCBanner=()=>{
    //     !showTncThroughPuckar && clickHandler();
    //     dashboardTnCState.isInitialized && 
    //     !dashboardTnCState.isVerified && 
    //     dashboardTnCState.doConfirm({
    //         customerId: userProfileReducer?.customerId || "",
    //         visitId: userProfileReducer?.visitId || "",
    //         visitorId:userProfileReducer?.visitorId || "",
    //         city: userProfileReducer?.userData.city || ""
    //     },(res,isVerified,isResponsed)=>{
    //         let element = document.getElementById('dashboardTncBtn');
    //         element && element.removeEventListener('click', closeTnCBanner, true)
    //         clickHandler();
    //     })
    // }
    const closeTnCBanner=()=>{
        return true
    }
    return (
        <div className="fixed_tnc" id="dashboardTnc">
            <div className="fixed_tnc_Wrapper">
                <p className="_text">
                    <span className="mobile_hide">We have updated our T&amp;C for Paisabazaar Credit Score Services, </span> 
                    <span className="moreText"> By continuing your use of Paisabazaar account, you agree with the updated <a href="https://creditreport.paisabazaar.com/credit_score-terms-of-use" target="_blank"  rel="noreferrer">Terms of Service - Paisabazaar Credit Score</a>  </span>
                </p>
                <button className="_button btn-info" onClick={()=>closeTnCBanner()}>Got It!</button>
            </div>
        </div>
    )
   
}
export default DashboardTnC;