import React,{lazy}       from 'react';
import { Grid }    from '@mui/material';
import * as TemplateConstants from "template/TemplateConstants";
import './styles/CreditFactors.scss';
const SectionHeading = lazy(() => import('pages/coreUI/sectionHeading'), { loading: () => 'Loading...', });
const Button = lazy(() => import('pages/coreUI/common/_button'), { loading: () => 'Loading...', });
const Images = lazy(() => import('pages/coreUI/common/_image'), { loading: () => 'Loading...', });
function Factors (props){  
        const {actionHandler} = props;
        let eligibleForRenewal   = true;
        const initializeFactorDetails = [{
          factorName: "Payment History",
          factorKey: 'paymentHistory',
          impact: "High Impact",
          impactKey: 'averagePaymentBand',
          impactValue: '',
          paramName: "Payments on time",
          paramValue: 'NA',
          paramKey: 'averagePayment',
        }, {
          factorName: "Credit Card Utilisation",
          factorKey: 'creditUtilization',
          impact: "High Impact",
          impactKey: 'creditUtilizationBand',
          impactValue: '',
          paramName: "Credit limit used",
          paramValue: 'NA',
          paramKey: 'totalCreditUtilization',
        }, {
          factorName:"Credit History",
          factorKey: 'creditHistoryAge',
          impact: "High Impact",
          impactKey: 'accountAgeBand',
          impactValue: '',
          paramName: "Age of oldest account",
          paramValue: 'NA',
          paramKey: 'shortenedAccountAge',
        }, {
          factorName: "Total Accounts",
          factorKey: 'totalAccount',
          impact: "High Impact",
          impactKey: 'accountBand',
          impactValue: '',
          paramName: "Active accounts",
          paramValue: 'NA',
          paramKey: 'activeAccounts',
        }, {
          factorName: "Credit Enquiries",
          factorKey: 'creditEnquiries',
          impact: "Medium Impact",
          impactKey: '',
          impactValue: '',
          paramName: "Total enquiries",
          paramValue: 'NA',
          paramKey: 'numberOfEnquiries',
        }];

        const { bureauStatus } = props; 
        const creditInfo = bureauStatus?.creditReportInformation;
        // factors
        const factors  = initializeFactorDetails.map((item) => {
          if(creditInfo && creditInfo.hasOwnProperty(item.factorKey) === true && creditInfo[item.factorKey].hasOwnProperty('current') === true) {
            const value = creditInfo[item.factorKey].current[item.paramKey]
            let impactValue = creditInfo[item.factorKey].current[item.impactKey]
            if (value !== 'N/A' && value !== '-' && value !== 'Not Available') { item.paramValue = value }
            if (impactValue && impactValue !== 'N/A' && impactValue !== '-') {
              impactValue = impactValue.replace('V.', '')
              item.impactValue = impactValue.toLowerCase()
            }
          }
          return item
        }); 

        const clickHandler=()=>{
          props?.redirectToCreditHealthDashboard();
        }
       

        return (
            <div className="CreditFactors"  id="factor-div"> 
                <SectionHeading sourceComponent="reportPage" heading={"Credit Factors"} subHeading={["See the factors impacting your score"]} />
                <Grid  container rowSpacing={1} spacing={TemplateConstants.GRID_SPACING} >
                  <Grid item xs={12} md={8}> 
                   <div className="factorContainer">
                     <ul className="factorList">
                      {factors && factors.map((items, index) => (
                          <li className={` list ${items.factorKey}`} key={`factor_List${index}`} onClick={()=>actionHandler("goToFactorsPage",items.factorKey)}>                           
                            <div className="infoContainer">
                                  <Images  height="55px" width="40px" lazy={false} src={`/images/factors/${items.factorKey}.svg`}/>
                              <div className='factorImpact'>
                                  {items.factorName && <p className="_info factorName">{items.factorName}</p>}
                                  {items.impact && <p className="_info impact">{items.impact}</p>  }
                              </div>                                                        
                            </div>
                            <div className="valueContainer">
                              {items.paramValue && <p className={`${items.impactValue ? "" : "NA"} _info paramValue`}>{items.paramValue}</p>}
                              {items.impactValue && <p className={`${items.impactValue} _info impactValue`}>{items.impactValue}</p>}
                            </div>
                          </li>
                      ))}                      
                     </ul>
                   </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <div className="creditHealthReport _Banner single">
                        <div className='imageContainer'><img  height="160px" width="160px" src="/images/banner/creditHealthReport_Banner.svg" alt="creditHealthReport_Banner" /></div>
                        <div className='infoContainer'>
                          <h3 className='title'>Credit Health Report</h3>
                          <ul className='infoText'>
                            <li className='list'>Expert insights into credit health</li>
                            <li className='list'>Tips to improve credit score</li>
                          </ul>
                          <div className='buttonContainer'> 
                            <Button
                              className="btn getCreditHealthBtn"
                              btnClickHandler={() => clickHandler()}
                              buttonText={eligibleForRenewal ? 'Renew Now' : 'Get Credit Healthy'}
                              btnRightIconSrc={'/images/icons/right-arrow.svg'}
                              btnRightIcon
                              imgHeight={'10px'}
                              imgWidth={'14px'}
                              
                            />
                        </div>
                        </div>
                    </div>                    
                  </Grid>
                </Grid>
            
            </div>                        
          );
}

export default Factors;