import React, {lazy, Fragment, useState}      from 'react';
import CreditAdvisoryModal    from '../modal/CreditAdvisoryModal';
import './styles/CreditAdvisoryBanner.scss';
const Button = lazy(() => import('pages/coreUI/common/_button'), { loading: () => 'Loading...', });
const Images = lazy(() => import('pages/coreUI/common/_image'), { loading: () => 'Loading...', });

function CreditAdvisoryBanner(props){  
        const {isWhyIsItImportantInfoModal, actionHandler, isCreditAdvisoryBanner, className=""} = props;
        const [creditAdvisoryBannerState, setCreditAdvisoryBanner] = useState(isCreditAdvisoryBanner);
            

        const clickHandler=(actionType,data)=>{                      
            //actionHandler(actionType,data);
        }
            
        return (
            <Fragment>
            {isWhyIsItImportantInfoModal &&<CreditAdvisoryModal {...props} />}           
            <section className={`${className} ${isCreditAdvisoryBanner ? "active" : "hide"} CreditAdvisoryBanner`} >
              <div className='imageContainer'>
                    <Images lazy={false} src={`/images/icons/creditAdvisory/banner/CreditAdvisoryBg.svg`}/>
              </div>
              <div className='infoContainer'>
                   <div className='_LogoTitle'><Images lazy={false} src={`/images/icons/logo/CreditAdvisoryLogo.svg`}/></div>
                   <div className='_infoTitle'>Score improvement advisory</div>
                   <ul className='_infoFeatures'>
                       <li>Personalized analysis by experts on your credit score </li>
                       <li>Tips on maintaining a high credit score</li>
                       <li>Guidance in credit report error correction</li>
                   </ul>
                   <div className='buttonContainer'>
                    <Button
                        className="btn knowMoreBtn"
                        btnClickHandler={() => actionHandler('creditAdvisoryBannerKnowMore', {})}
                        buttonText={'Know More'}
                    />
                    <Button
                        className="btn whyIsItImportantBtn"
                        btnClickHandler={() => actionHandler('whyIsItImportantInfoModal', {})}
                        buttonText={'Why is it important'}
                        btnRightIcon={true}
                        btnRightIconSrc={"/images/icons/creditAdvisory/banner/InfoIcon.svg"}
                    />
                </div> 
                <div className='whyImportant'>
                   <div className='_infoTitle'> Why is reaching a high credit score important?</div>
                   <ul className='_infoFeatures'>
                       <li>Low interest rate on loans</li>
                       <li>Greater chance of loans & cards approval</li>
                       <li>Higher limit on credit card</li>
                       <li>More negotiating power with the bank</li>
                   </ul>
                </div>
              </div>                             
            </section>                       
            </Fragment>
          );
}

export default  CreditAdvisoryBanner;