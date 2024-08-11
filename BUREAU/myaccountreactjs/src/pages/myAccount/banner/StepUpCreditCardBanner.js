import React, { Fragment,lazy }      from 'react';
import StepUpCreditCardModal  from '../modal/StepUpCreditCardModal';
import './styles/StepUpCreditCardBanner.scss';
const Button = lazy(() => import('pages/coreUI/common/_button'), { loading: () => 'Loading...', });
const Images = lazy(() => import('pages/coreUI/common/_image'), { loading: () => 'Loading...', });


function StepUpCreditCardBanner(props){  
        const {actionHandler, className=""} = props;
        return (
            <Fragment>
            { props.isStepUpCardModal && <StepUpCreditCardModal {...props} />}           
            <section className={`${className} active creditCardBanner cardBanner`} >
               <div className='imageContainer'>
                    <Images lazy={false} height="200px" width="200px" src={`/images/banner/stepUpCreditCardBanner/StepUpCreditCardBannerBg.svg`}/>
              </div>
              <div className='infoContainer'>
                   <div className='_LogoTitle'> <Images height="30px" width="100px" lazy={false} src={`/images/header/PBLogoSmall.svg`}/></div>
                   <div className='_infoTitle'>Step Up Credit Card</div>
                   <ul className='_infoFeatures'>
                       <li>FD Backed Credit card</li>
                       <li>No Bureau check is required</li>
                       <li>Credit card limit is 100% of FD limit</li>
                       <li>FD starts from Rs.2000</li>
                   </ul>
                   <div className='buttonContainer'>
                    <Button
                        className="btn knowMoreBtn"
                        btnClickHandler={() => actionHandler('stepUpCreditCardBannerKnowMore', {})}
                        buttonText={'Know more about SBM'}
                    />
                    <Button
                        className="btn whyIsItImportantBtn"
                        btnClickHandler={() => actionHandler('stepUpCreditCardBannerInfoModal', {})}
                        buttonText={'How Step Up card helps to increase score'}
                        btnRightIcon={true}
                        btnRightIconSrc={"/images/banner/creditAdvisory/banner/InfoIcon.svg"}
                        imgHeight={'14px'}
                        imgWidth={'14px'}
                    />
                </div> 
                </div>
            </section>                       
            </Fragment>
          );
}

export default  StepUpCreditCardBanner;