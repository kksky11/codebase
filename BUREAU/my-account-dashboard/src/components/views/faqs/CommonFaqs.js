import PropTypes                  from 'prop-types';
import React                      from 'react';
import underscore                 from 'utils/paisabazaarUnderscore';
import utility                    from 'utils/utility';
import Heading                    from 'coreComponents/heading';
import * as BureauConstants       from 'constants/BureauReportConstants';
import './styles/Faqs.module.scss';

function CommonFaqs(props){
    const {userProfileReducer,t,activeCreditBureau} = props;   
    const bureauFaqContentSection1=()=>{
        return (
            <div className="-accordian">
                <label htmlFor="acc-1-8" id="Q_differenceBetweenCIBILCreditScore" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq8.ques')}</label>
                 <div className="infoTxt">
                    {t('faq:creditReport.understandingCreditScoreReport.faqs.faq8.ans')}
                </div>
            </div>
        );
    }
    const bureauFaqContentSection2=()=>{
        return (
            <article className="_article" id="different_bureaus">                        
                <label htmlFor="acc-4" id="Q_yourReportAcrossDifferentBureaus" onClick={(e)=>props.actionHandler("activeArticle",e)} >{t('faq:creditReport.reportAcrossBureaus.heading')}</label>
                <div className="infoTxt">
                    <div className="-accordian">
                        <label htmlFor="acc-4-1" id="Q_ReceivingMultipleScore" onClick={(e)=>props.actionHandler("activeChildArticle",e)}> {t('faq:creditReport.reportAcrossBureaus.faqs.faq1.ques')}</label>
                        <div className="infoTxt">
                            {t('faq:common.answer')}
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq1.ans')}
                        </div>
                    </div>
                    <div className="-accordian">
                        <label htmlFor="acc-4-2" id="Q_DifferentBureauScore"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ques')}</label>
                        <div className="infoTxt">                           
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line1')}
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line2.part1')} 
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line2.part2')}
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line3.part1')}
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line3.part2')}
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line4.part1')} 
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line4.part2')} 
                            <a href="mailto:creditreport@paisabazaar.com" target="_top">creditreport@paisabazaar.com</a> 
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq2.ans.line4.part3')}
                        </div>
                    </div>
                    <div className="-accordian">
                        <label htmlFor="acc-4-3" id="Q_BureauPreferredByLender"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.reportAcrossBureaus.faqs.faq3.ques')}</label>
                            <div className="infoTxt">
                                    {t('faq:creditReport.reportAcrossBureaus.faqs.faq3.ans')}
                            </div>
                    </div>
                    <div className="-accordian">
                        <label htmlFor="acc-4-4" id="Q_HowToBuildScore"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.reportAcrossBureaus.faqs.faq4.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.reportAcrossBureaus.faqs.faq4.ans.preceding')}
                                <ul className="disc pLR10">
                                    <li>  {t('faq:creditReport.reportAcrossBureaus.faqs.faq4.ans.item1')}</li>
                                    <li>  {t('faq:creditReport.reportAcrossBureaus.faqs.faq4.ans.item2')}</li>
                                    <li>  {t('faq:creditReport.reportAcrossBureaus.faqs.faq4.ans.item3')}</li>
                                    <li>  {t('faq:creditReport.reportAcrossBureaus.faqs.faq4.ans.item4')}</li>
                                </ul>
                            </div>
                    </div>
                    <div className="-accordian">
                        <label htmlFor="acc-4-5" id="Q_WhichBureauToTrack"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.reportAcrossBureaus.faqs.faq5.ques')}</label>
                        <div className="infoTxt">
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq5.ans')}
                        </div>
                    </div>
                    <div className="-accordian">
                        <label htmlFor="acc-4-6" id="Q_BureauChargesExperian"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.reportAcrossBureaus.faqs.faq6.ques')}</label>
                        <div className="infoTxt">
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq6.ans.line1')}<br/>
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq6.ans.line2')}<br/>
                            {t('faq:creditReport.reportAcrossBureaus.faqs.faq6.ans.line3')}<br/>
                        </div>
                    </div>
                </div>
            </article>);

    }
    const renderSubscriptionSectionFaq=()=>{
        // if user is unsubscribed ask to resubscription else show unsubscribe option
        if((utility.isEmpty(userProfileReducer) === false)
            && (utility.isEmpty(userProfileReducer.userData) === false)
            && (userProfileReducer.userData.subscription == 0)) {
            return (
                <div className="-accordian">
                    <label htmlFor="acc-2-11" id="howToResubscribeMyFreeMonthlyCreditReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq11.ques')}</label>
                    <div className="infoTxt">
                        {t('faq:creditReport.yourAccount.faqs.faq11.ans')} 
                         <span>{t('creditReport:bspContent.resubscribeAccount.resubscribe.part1')} <a onClick={()=>actionHandler('ResubscribeAccount',true)} className="clr-blue" >{t('creditReport:bspContent.resubscribeAccount.resubscribe.part2')} </a></span>   
                    </div>
                </div>
            );
        } else {
            return (
                <div className="-accordian">
                    <label htmlFor="acc-2-11" id="howToUnsubscribeMyFreeMonthlyCreditReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq11Alternate.ques')}</label>
                    <div className="infoTxt">
                        {t('faq:creditReport.yourAccount.faqs.faq11Alternate.ans.line1')}  
                        {(utility.isEmpty(props.userProfileReducer.customerId) === false) &&
                            <span>However, if you still want to unsubscribe your account, <a onClick={()=>actionHandler('SubscribeAccount',true)} >click here. </a></span>
                        } <br />
                        {t('faq:creditReport.yourAccount.faqs.faq11Alternate.ans.line2')}
                    </div>
                </div>
            );
        }

    }
    let bureauFaqContentText1 = bureauFaqContentSection1();
    let bureauFaqContentText2 = bureauFaqContentSection2();
    let subscriptionSection   = renderSubscriptionSectionFaq();
    if(underscore.isEmpty(activeCreditBureau) == false && activeCreditBureau == BureauConstants.BUREAU_CIBIL){bureauFaqContentText1 = '';}

    return(
            <section className="-accordian_v2 moreArticle"> 
                <Heading heading={"Common Topics: "}/>
                <article className="_article" >
                    <label htmlFor="acc-1" id="Q_understandingCreditScore" onClick={(e)=>props.actionHandler("activeArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.heading')}</label>
                    <div className="infoTxt">
                        <div className="-accordian">
                            <label htmlFor="acc-1-1" id="Q_WhatCreditScore" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq1.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq1.ans')} 
                            </div>
                        </div>

                        <div className="-accordian ">
                            <label htmlFor="acc-1-2" id="Q_WhatCreditReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq2.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq2.ans')}
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-3" id="Q_ScoreRatingSame" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq3.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq3.ans')}
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-4" id="Q_ScoreImportant" onClick={(e)=>props.actionHandler("activeChildArticle",e)}> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq4.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq4.ans')}
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-5" id="Q_ScoreCalculation" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq5.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq5.ans.preceding')}
                                <ul className="list">
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq5.ans.item1')}</li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq5.ans.item2')}</li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq5.ans.item3')}</li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq5.ans.item4')}</li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq5.ans.item5')} </li>
                                </ul>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-6" id="Q_ReportPreparation" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq6.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq6.ans')}
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-7" id="Q_BureauInfoProcess" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq7.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq7.ans')}
                            </div>
                        </div>

                        {bureauFaqContentText1}

                        <div className="-accordian">
                            <label htmlFor="acc-1-9" id="Q_FactorImpactScore" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ques')}</label>
                            <div className="infoTxt">
                                    {t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.preceding')}
                                    <ul className="list">
                                        <li>  <b>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor1.factor')} </b>: {t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor1.desc')}</li>
                                        <li>  <b>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor2.factor')} </b>: {t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor2.desc')}</li>
                                        <li>  <b>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor3.factor')} </b>: {t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor3.desc')}</li>
                                        <li>  <b>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor4.factor')} </b>: {t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor4.desc')}</li>
                                        <li>  <b>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor5.factor')} </b>: {t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor5.desc')}</li>
                                        <li>  <b>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor6.factor')} </b>: {t('faq:creditReport.understandingCreditScoreReport.faqs.faq9.ans.factor6.desc')}</li>
                                    </ul>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-10" id="Q_DonotNeedLoan" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq10.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq10.ans')}
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-11" id="Q_MultipleCcAffect" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq11.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq11.ans.line1')}
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq11.ans.line2.part1')}
                                <a href="https://www.paisabazaar.com/credit-card/articles/8265-factors-to-consider-before-having-multiple-credit-cards/" target="_blank"> 
                                    {t('faq:creditReport.understandingCreditScoreReport.faqs.faq11.ans.line2.part2')}
                                </a>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-1-12" id="Q_Guarantor" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq12.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq12.ans')}
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-1-13" id="Q_MonitoringImportance" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq13.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq13.ans')}
                            </div>
                        </div>                            
                        
                        <div className="-accordian">
                            <label htmlFor="acc-1-14" id="Q_WhyScoreNotRefreshed" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.preceding')}
                                <ul className="list">
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item1')}</li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item2')}</li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item3')}</li>
                                    <li> <a href="https://www.cibil.com/dispute/" target="_blank">https://www.cibil.com/dispute/</a></li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item4')}</li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item5')}<a href="mailto:consumer.support@in.experian.com" target="_top">consumer.support@in.experian.com</a></li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item6')}<a href="mailto:ecissupport@equifax.com" target="_top">ecissupport@equifax.com</a></li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item7')}<a href="mailto:crifcare@crifhighmark.com" target="_top">crifcare@crifhighmark.com</a></li>
                                    <li> {t('faq:creditReport.understandingCreditScoreReport.faqs.faq14.ans.item8')} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="_article" >
                    <label htmlFor="acc-2" id="Q_gettingYourCreditReport" onClick={(e)=>props.actionHandler("activeArticle",e)}>{t('faq:creditReport.yourAccount.heading')}</label>
                    <div className="infoTxt">
                        <div className="-accordian">
                            <label htmlFor="acc-2-1" id="Q_FreeReportProcess" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq1.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq1.ans.preceding')}
                                <ul className="disc pLR10">
                                    <li><b>{t('faq:common.step')} 1 :</b> {t('faq:creditReport.yourAccount.faqs.faq1.ans.item1.part1')} <a href="http://www.paisabazaar.com/" target="_blank">www.paisabazaar.com</a> {t('faq:creditReport.yourAccount.faqs.faq1.ans.item1.part2')}</li>
                                    <li><b>{t('faq:common.step')} 2 :</b> {t('faq:creditReport.yourAccount.faqs.faq1.ans.item1.part1')} <a href="http://www.paisabazaar.com/" target="_blank">www.paisabazaar.com</a> {t('faq:creditReport.yourAccount.faqs.faq1.ans.item2')}</li>
                                    <li><b>{t('faq:common.step')} 3 :</b> {t('faq:creditReport.yourAccount.faqs.faq1.ans.item1.part1')} <a href="http://www.paisabazaar.com/" target="_blank">www.paisabazaar.com</a> {t('faq:creditReport.yourAccount.faqs.faq1.ans.item3')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-2" id="Q_HowtoCheckScore" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq2.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq2.ans.preceding')}
                                <ul className=" list">
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq2.ans.item1')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq2.ans.item2')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq2.ans.item3')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq2.ans.item4')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq2.ans.item5')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq2.ans.item6')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-3" id="Q_CheckingReportImpact" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq3.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq3.ans')}
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-4" id="Q_ReportCharges" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq4.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq4.ans')}
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-5" id="Q_DocumentRequiredReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq5.ques')}</label>
                                <div className="infoTxt">
                                 {t('faq:creditReport.yourAccount.faqs.faq5.ans.preceding')}
                                <ul className="disc pLR10">
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq5.ans.item1')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq5.ans.item2')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq5.ans.item3')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-6" id="Q_DocumentRequiredReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq6.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq6.ans')}
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-7" id="Q_InformationSecurity" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq7.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq7.ans')}
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-8" id="Q_FrequencyForUpdate" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq8.ques')}</label>
                                <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq8.ans')}
                            </div>
                        </div>
                        <div className="-accordian">
                            <label htmlFor="acc-2-9" id="Q_Can'tSeeScore" onClick={(e)=>props.actionHandler("activeChildArticle",e)}> {t('faq:creditReport.yourAccount.faqs.faq9.ques')}</label>
                                <div className="infoTxt">
                                    {t('faq:creditReport.yourAccount.faqs.faq9.ans.preceding')}
                                    <ul className="disc pLR10">
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item1')}</li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item2')}</li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item3')}<br /><br /></li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item4')}</li>
                                        <li> <a href="https://www.cibil.com/dispute/" target="_blank">https://www.cibil.com/dispute/</a></li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item5')}</li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item6')}</li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item7')}<a href="mailto:consumer.support@in.experian.com" target="_top">consumer.support@in.experian.com</a></li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item8')}<a href="mailto:ecissupport@equifax.com" target="_top">ecissupport@equifax.com</a></li>
                                        <li> {t('faq:creditReport.yourAccount.faqs.faq9.ans.item9')}<a href="mailto:crifcare@crifhighmark.com" target="_top">crifcare@crifhighmark.com</a></li>
                                    </ul>
                            </div>
                        </div>
                        {/* <div className="-accordian">
                            <label htmlFor="acc-2-10" id="howToDeleteMyAccountFromPaisabazaar" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq10.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq10.ans.line1')} 
                                { (utility.isEmpty(props.userProfileReducer.customerId) === false) &&
                                    <span>However, if you still want to delete your account, <a onClick={()=>actionHandler('accountDeleteConfirmationModal',true)} >click here.</a></span> 
                                } <br />
                                {t('faq:creditReport.yourAccount.faqs.faq10.ans.line1')}
                            </div>
                        </div>                         */}
                        {/* {subscriptionSection}                         */}
                        <div className="-accordian">
                            <label htmlFor="acc-2-12" id="Q_FacingIssueReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.yourAccount.faqs.faq12.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.yourAccount.faqs.faq12.ans.preceding')}
                                <ul className="disc pLR10">
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq12.ans.item1')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq12.ans.item2')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq12.ans.item3')}</li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq12.ans.item4')}<br /><br /></li>
                                    <li> {t('faq:creditReport.yourAccount.faqs.faq12.ans.item5')} <a href="mailto:creditreport@paisabazaar.com" target="_top">creditreport@paisabazaar.com.</a> {t('faq:creditReport.yourAccount.faqs.faq12.ans.item6')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="_article" >
                    <label htmlFor="acc-3" id="Q_howToReadYourCreditReport" onClick={(e)=>props.actionHandler("activeArticle",e)}>{t('faq:creditReport.howToReadCreditReport.heading')}</label>
                    <div className="infoTxt">
                        <div className="-accordian">
                            <label htmlFor="acc-3-1" id="Q_InsideReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToReadCreditReport.faqs.faq1.ques')}</label>
                                <div className="infoTxt">
                                <p className="m0">{t('faq:creditReport.howToReadCreditReport.faqs.faq1.ans')}</p>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-3-2" id="Q_SectionOfReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToReadCreditReport.faqs.faq2.ques')}</label>
                                <div className="infoTxt">
                                   {t('faq:creditReport.howToReadCreditReport.faqs.faq2.ans.preceding')}
                                    <ul className="disc pLR10">
                                        <li>{t('faq:creditReport.howToReadCreditReport.faqs.faq2.ans.item1')} </li>
                                        <li>{t('faq:creditReport.howToReadCreditReport.faqs.faq2.ans.item2')} </li>
                                        <li>{t('faq:creditReport.howToReadCreditReport.faqs.faq2.ans.item3')} </li>
                                    </ul>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-3-3" id="Q_NotIncludedInReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}> {t('faq:creditReport.howToReadCreditReport.faqs.faq3.ques')}</label>
                            <div className="infoTxt">
                                {t('faq:creditReport.howToReadCreditReport.faqs.faq3.ans')}
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-3-4" id="Q_ClosedActive" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToReadCreditReport.faqs.faq4.ques')}</label>
                                <div className="infoTxt">
                                   {t('faq:creditReport.howToReadCreditReport.faqs.faq4.ans.preceding')}
                                    <ul className="disc pLR10">
                                        <li>{t('faq:creditReport.howToReadCreditReport.faqs.faq4.ans.item1')} </li>
                                        <li>{t('faq:creditReport.howToReadCreditReport.faqs.faq4.ans.item2')} </li>
                                    </ul>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-3-5" id="Q_ErrorInReport" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToReadCreditReport.faqs.faq5.ques')}</label>
                                <div className="infoTxt">
                                   {t('faq:creditReport.howToReadCreditReport.faqs.faq5.ans.preceding')}
                                    <ul className="list">
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq5.ans.item1')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq5.ans.item2')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq5.ans.item3')}</li>
                                    </ul>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-3-6" id="Q_ShowingCcError" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToReadCreditReport.faqs.faq6.ques')}</label>
                                <div className="infoTxt">
                                   {t('faq:creditReport.howToReadCreditReport.faqs.faq6.ans.preceding')}
                                    <ul className="disc pLR10">
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq6.ans.item1')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq6.ans.item2')}</li>
                                    </ul>
                            </div>
                        </div>

                        <div className="-accordian">
                            <label htmlFor="acc-3-7" id="Q_ReportInCaseOfError" onClick={(e)=>props.actionHandler("activeChildArticle",e)}> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ques')}</label>
                            <div className="infoTxt">
                                  {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item1')}
                                    <ul className="disc pLR10">
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item2')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item3')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item4')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item5')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item6')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item8')}</li>
                                        <li> <a href="https://www.cibil.com/dispute/" target="_blank">https://www.cibil.com/dispute/</a></li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item9')}</li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item10')}<a href="mailto:consumer.support@in.experian.com" target="_top">consumer.support@in.experian.com</a></li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item11')}<a href="mailto:ecissupport@equifax.com" target="_top">ecissupport@equifax.com</a></li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item12')}<a href="mailto:crifcare@crifhighmark.com" target="_top">crifcare@crifhighmark.com</a></li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item13')} </li>
                                        <li> {t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item14')} <a href="mailto:creditreport@paisabazaar.com" target="_top">creditreport@paisabazaar.com </a>{t('faq:creditReport.howToReadCreditReport.faqs.faq7.ans.item15')} </li>
                                    </ul>
                            </div>
                        </div>
                    
                        <div className="-accordian">
                            <label htmlFor="acc-3-8" id="Q_Noc" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToReadCreditReport.faqs.faq8.ques')}</label>
                                <div className="infoTxt">
                                    {t('faq:creditReport.howToReadCreditReport.faqs.faq8.ans.preceding')}<br/>
                                    {t('faq:creditReport.howToReadCreditReport.faqs.faq8.ans.item1')}
                            </div>
                        </div>
                    
                        <div className="-accordian">
                            <label htmlFor="acc-3-9" id="Q_Password" onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToReadCreditReport.faqs.faq9.ques')}</label>
                            <div className="infoTxt">
                                 {t('faq:creditReport.howToReadCreditReport.faqs.faq9.ans.preceding')}
                            </div>
                        </div>
                    
                    </div>
                </article>
                {bureauFaqContentText2}
                <article className="_article" >
                        <label htmlFor="acc-5" id="Q_howToBuildCreditScore" onClick={(e)=>props.actionHandler("activeArticle",e)}>{t('faq:creditReport.howToBuildCreditScore.heading')}</label>
                        <div className="infoTxt ">
                            <div className="-accordian">
                                <label htmlFor="acc-5-1" id="Q_ImproveScore"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ques')} </label>
                                    <div className="infoTxt">
                                     {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.preceding')}
                                    <ul className="disc pLR10">
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item1')}</li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item2')}</li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item3')}</li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item4')}</li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item5')}</li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item6')}</li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item7')}</li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item8')}<br /><br /></li>
                                            <li>  {t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item9')} <a href="https://www.paisabazaar.com/cibil/9-tips-build-maintain-healthy-cibil-score/" target="_blank">{t('faq:creditReport.howToBuildCreditScore.faqs.faq1.ans.item10')} </a></li>
                                        </ul>
                                </div>
                            </div>
                            <div className="-accordian">
                                <label htmlFor="acc-5-2" id="Q_TimeImproveScore"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToBuildCreditScore.faqs.faq2.ques')}</label>
                                <div className="infoTxt">
                                   {t('faq:creditReport.howToBuildCreditScore.faqs.faq2.ans.preceding')}
                                        <ul className="list">
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq2.ans.item1')}</li>
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq2.ans.item2')}</li>
                                        </ul>
                                   {t('faq:creditReport.howToBuildCreditScore.faqs.faq2.ans.proceding')} 
                                </div>
                            </div>
                            <div className="-accordian">
                                <label htmlFor="acc-5-3" id="Q_LoanRepaymentEffect"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToBuildCreditScore.faqs.faq3.ques')}</label>
                                <div className="infoTxt">
                                   {t('faq:creditReport.howToBuildCreditScore.faqs.faq3.ans')}
                                </div>
                            </div>
                            <div className="-accordian">
                                <label htmlFor="acc-5-4" id="Q_NewToCredit"  onClick={(e)=>props.actionHandler("activeChildArticle",e)}>{t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ques')}</label>
                                    <div className="infoTxt">
                                        {t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ans.preceding')}
                                        <ul className="list">
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ans.item1')} </li>
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ans.item2')} </li>
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ans.item3')}</li>
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ans.item4')} </li>
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ans.item5')} </li>
                                            <li> {t('faq:creditReport.howToBuildCreditScore.faqs.faq4.ans.item6')} </li>
                                        </ul>

                                </div>
                            </div>
                        </div>
                    </article>
            </section>
        )

}
export default CommonFaqs;