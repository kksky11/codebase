import React           from 'react';
import Button                       from 'pages/coreUI/common/_button';
import Images                       from 'pages/coreUI/common/_image';
import DashboardTnC                 from 'pages/coreUI/tncBanner/DashboardTnc';
import './styles/bureauInfoAlert.scss';
function BureauInfoAlert(props){  
        const {alertMSgType="",actionHandler} = props;
        let alertText     = '';
        let alertLinkText = '';

        switch(alertMSgType){
            case `scribeAlert` : alertLinkText = 'Read More'; alertText="";  break;
            case `readMore`    : alertLinkText = 'Read More'; alertText="Your score may vary across bureaus as each bureau follows different methodology to calculate your credit score.";  break;
            case `dashboardTnC`: alertLinkText = 'Got It!';   alertText="We have updated our T&C Paisabazaar Credit Score services, By continuing. your use of Paisabazaar account, you agree with the  updated Terms of Service - paisabazaar Credit Score";  break;
            case `noScore`     : alertLinkText = '';          alertText="We will put in our best efforts to fetch your credit score and notify you as soon as it is available";  break;
           
            default            : break
        }

        const clickHandler=()=>{
            actionHandler("alertLinkBtn",alertMSgType);
        }
           
        return (
            <div className={`${alertMSgType ? "active" : ""} _stripAlert BureauInfoAlert`}  >
               {
               alertMSgType === 'dashboardTnC' 
               ? <DashboardTnC {...props} clickHandler={clickHandler} />
               : <div className={`${alertMSgType} info`}> 
                    <div className='infoContainer'>
                        {<Images lazy={false} src="/images/icons/notificationIcon/NotificationIcon.png" />}
                        <div className='alertText'>{alertText}</div>
                    </div>
                    <div className='buttonContainer'>
                        <Button 
                            className={`${alertMSgType} btn ${alertLinkText ? "alertLinkBtn" : "alertCloseBtn" } `}
                            btnClickHandler={() => clickHandler()}
                            buttonText={alertLinkText}
                            btnRightIcon={alertLinkText ? false : true}
                            btnRightIconSrc={"/images/icons/close.svg"}
                            imgHeight={'10px'}
                            imgWidth={'10px'}
                        />
                    </div>
                 </div>
               }
                                                   
            </div>                       
          );
}

export default  BureauInfoAlert;