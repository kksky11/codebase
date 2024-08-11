import React, {lazy}      from 'react';
import './styles/whatsAppUpdateBanner.scss';
const Button = lazy(() => import('pages/coreUI/common/_button'), { loading: () => 'Loading...', });
const Images = lazy(() => import('pages/coreUI/common/_image'), { loading: () => 'Loading...', });
function WhatsAppUpdateBanner(props){  
        const {actionHandler} = props;
     
        return (
            <div className="WhatsAppUpdateBanner">
               <div className='infoSection'>
                   <Images width="95px" height="87px" lazy={false} className="WhatsAppUpdateIconDesktop" src={`/images/whatsapp/WhatsAppUpdateIconDesktop.svg`}/>
                    <div className="bannerInfo">
                        <h3 className="title">Never Miss Any Updates!</h3>
                        <p className="desc">Whatsapp notifications of monitor your credit score, get customised offers and more</p>                    
                    </div>
               </div>                
                <div className='buttonContainer'>
                    <Button 
                        className="WhatsAppBtn" 
                        btnClickHandler={()=>actionHandler("isWhatsApp",{})} 
                        buttonText={"Enable Now!"}
                    />
                     <Images width="68px" height="58px" lazy={false} className="WhatsAppUpdateIconMobile" src={`/images/whatsapp/WhatsAppUpdateIconMobile.svg`}/>                    
                </div>
                
            </div>                        
          );
}

export default  WhatsAppUpdateBanner;