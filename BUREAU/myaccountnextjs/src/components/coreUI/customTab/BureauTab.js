import React, { Fragment, useState}           from 'react';
import { connect }                  from 'react-redux';
import utility                      from 'utils/utility';
import underscore                   from 'utils/paisabazaarUnderscore';
import * as actionTypesConstants    from 'constants/ActionTypes';
import * as bureauReportConstants   from 'constants/BureauReportConstants';
import * as UserActions             from 'actions/UserActions';
import * as RouterActions           from 'actions/RouterActions';
import * as ApiConstants            from 'constants/ApiConstants';
import PaisaSelect                  from 'components/PaisaSelect';
import Image                        from 'coreComponents/common/_image';
import Button                       from 'coreComponents/common/_button';
import './styles/BureauTab.scss';

function BureauTab(props) {
    const { actionHandler, tabContent, className="old"} = props;
    const [SMSVersionValueState, setSMSVersionValueState] = useState('');
    const { activeBureau, bureauStatus } = props.creditBureauProfileReducer;
    const activeBureauList = utility.getBureauList(props);

    const clickHandler = (bureauName) => {
        props.updateActiveCreditBureau(bureauName);
        actionHandler("updateActiveCreditBureauTab", bureauName); //callback actionHandler
    }

  
    const onSmsShare=(selectedValue)=>{
        let smsSharedList = underscore.result(props.userProfileReducer, 'smsSharedList', null);     
        setSMSVersionValueState(selectedValue.value);
        if(selectedValue.value == "" || underscore.indexOf(smsSharedList, selectedValue.value) > -1) {
            if(underscore.indexOf(smsSharedList, selectedValue.value) > -1) {
                if(selectedValue.value === "ENABLE_DISCOUNT"){
                    document.getElementById("activeVoucher").classList.remove("hide");
                    setTimeout(function(){document.getElementById("activeVoucher").classList.add("hide");}, 3000);
                }else{
                    document.getElementById("alreadySent").classList.remove("hide");
                    setTimeout(function(){document.getElementById("alreadySent").classList.add("hide");}, 3000);
                }
            }
            return null;
        }
        selectedValue.value == "ENABLE_DISCOUNT"
            ? UserActions.enableDiscount(props, selectedValue.value)
            : UserActions.creditAssistSmsShare(props, selectedValue.value)   
           
    }

    const renderCreditAssistSMSVersions=()=>{        
        const lastPaymentPlan = underscore.result(props.creditBureauProfileReducer,'advisoryLastPaymentDetails', null);
        const paymentAmount = underscore.result(lastPaymentPlan, 'paymentAmount', null);
        let availedPlan = 'Availed Plan - ';
        availedPlan += utility.isEmpty(paymentAmount) === false? 'Rs. ' + paymentAmount : 'N/A';
        
        let creditAssistSmsEventList = ApiConstants.CREDIT_ASSIST_SMS_EVENT_LIST;
        if(utility.isEmpty(lastPaymentPlan) === false) {
            const addOnEligibility = lastPaymentPlan.addOnEligibility;
            const showPaymentCta   = lastPaymentPlan.showPaymentCta;
            if(addOnEligibility === true && showPaymentCta === true) {
                creditAssistSmsEventList =  underscore.filter(creditAssistSmsEventList, (creditAssistSmsEvent)=>{
                     return creditAssistSmsEvent.label === "Send Payment SMS" || creditAssistSmsEvent.label === "Only Add On Call" || creditAssistSmsEvent.label === "Rectification: Negative Account";
                } )              
            }else if(addOnEligibility === false && showPaymentCta === true){
                creditAssistSmsEventList =  underscore.filter(creditAssistSmsEventList, (creditAssistSmsEvent)=>{
                    return creditAssistSmsEvent.label !== "Only Add On Call" 
                } )

            }else if(showPaymentCta === false){
                creditAssistSmsEventList =  underscore.filter(creditAssistSmsEventList, (creditAssistSmsEvent)=>{
                    return creditAssistSmsEvent.label === "Send Payment SMS" || creditAssistSmsEvent.label === "Rectification: Negative Account";
               } ) 
            }
        }
        
        return (
                <div className="creditAssistPaymentSmsContainer">
                     <Button
                        className="btn settlementBtn"
                        btnClickHandler={()=>props.redirectToCollectionSettlementPage()}
                        buttonText={'Collection Settlement'}
                    />
                    <div className="advisor_payment_plan_sms_conatainer selectDropDown">
                        <span className="pretextLabel">{availedPlan}</span>
                        <PaisaSelect
                            className       = ""
                            name            = "creditAssistPaymentSms"
                            id              = "creditAssistPaymentSms"
                            value           = {SMSVersionValueState}
                            helperText      = "sms"
                            options         = {creditAssistSmsEventList}
                            onChange        = {(selectedValue)=>onSmsShare(selectedValue)}
                            Searchable      = {false}
                            clearable       = {false}
                        />
                        <p id="successSent" className="errorSuccess hide">SMS sent successfully to the customer!</p>
                        <p id="alreadySent" className="errorMsg hide">SMS already sent to the customer!</p>
                        <p id="notEligible" className="errorMsg hide">Customer not Eligible for discount!</p>
                        <p id="activeVoucher" className="errorMsg hide">Customer has Active Voucher!</p>
                        <p id="alreadyPaidCustomer" className="errorMsg hide">Already Paid customer!</p>
                        <p id="invalidLead" className="errorMsg hide">Customer Not Eligible For CHR!</p>
                </div>
            </div>
            );
        
    }



    return (
        <Fragment>
            {utility.checkIsCrmAgentLogin(props) && renderCreditAssistSMSVersions()}
            <div className={`${className} tabContainer`}>
                <div className={`${activeBureau.toLowerCase()} tabHeading`}>{
                    activeBureauList && activeBureauList.map((bureauName, index) => <div key={`${bureauName['creditBureauType']}${index}`} onClick={() => clickHandler(bureauName['creditBureauType'])} className={`bureauList  ${bureauName['creditBureauType'] == activeBureau ? 'active' : ''}`}>
                    <span className='bureauName'>{bureauName['creditBureauType']}</span>
                    <Image lazy={false} src={`/images/icons/bureau/${bureauName['creditBureauType'].toLowerCase()}.svg`} alt="" />
                    </div>)}
                </div>
                <div className="tabContent">{tabContent}</div>
            </div>
        </Fragment>
    );
}
const mapStateToProps = (state) => { 
    const {userProfileReducer, creditBureauProfileReducer, environment } = state;
    return { creditBureauProfileReducer, environment };
}
const mapDispatchToProps = dispatch => ({
    redirectToCollectionSettlementPage(){dispatch(RouterActions.redirectToCollectionSettlementPage());},
    updateActiveCreditBureau(selectedBureau) { dispatch(UserActions.updateActiveCreditBureau(selectedBureau)); },
})

export default connect(mapStateToProps, mapDispatchToProps)(BureauTab);
