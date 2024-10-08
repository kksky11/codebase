import React, {  }          from 'react';
import Button               from 'coreComponents/common/_button';
import Image                    from 'coreComponents/common/_image';
import Heading              from 'coreComponents/heading';
import CoreModal            from 'coreComponents/coreModal';
import './styles/ThankYouForApplying.scss';

//Usese
{/* 
    <ThankYouForApplying 
        {...this.props}  
        ClassName    = ''
        data         = {}
        isActive     = {boolean}
        actionHandler= {function}
   /> 
*/}

function renderPopupCta(popupCtaData, popupActionHandler) {
    if (popupCtaData &&
        popupCtaData.status &&
        popupCtaData.heading) {
        return <Button 
                    className      = "btn thankyouBtn" 
                    btnClickHandler= {(event) => popupActionHandler(event)} 
                    buttonText     = {popupCtaData.heading}
                />
    }
    return null
}

function ThankYouForApplying(props) {
    const {data, isActive, actionHandler, popupCtaData, popupActionHandler, footerContent, popupBannerImage} = props;
   
    let popupBannerImageLink = "/images/discussion_v2.svg"
    let footerContentData = "You can also check other offers available based on your profile."
    let initialData = {
        "title"   : "Thank you for Applying!",
        "desc"    : ""
    }

    initialData = data ? data : initialData;
    footerContentData = footerContent ? footerContent : footerContentData
    popupBannerImageLink = popupBannerImage ? popupBannerImage : popupBannerImageLink

    return (
        <CoreModal
            isActive={isActive}
            actionHandler={actionHandler}
            modalWrapperClass={"common_modal_v2_container v2  common_info_modal  _thank_you_modal"}
            componentData={
             <div className="modalBodyWrapper">
                <div className="slide_bar_parent"><span className="slide_bar"></span></div>
                <span className="close_button" onClick={()=>actionHandler()}><img src="/images/blue_cross.svg"/></span>
                <div className="top_image_parent "><Image src={popupBannerImageLink}/></div>
                <div className="modal-body">
                    <div className="commonHeading _center"><div className="heading">{initialData.title}</div></div>
                    <div className="clear info g-11">
                         { initialData.desc && <p className="_info_txt">{initialData.desc}</p>}
                         <p className="_info_txt">{footerContentData}</p>
                         { renderPopupCta(popupCtaData, popupActionHandler)}
                    </div>
                </div>
            </div>
         }
        >
           
        </CoreModal>
    );
  }

export default ThankYouForApplying;
