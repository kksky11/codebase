import React, {useEffect,useState}  from 'react';
import {withNamespaces }            from 'react-i18next';
import Button                       from 'coreComponents/common/_button';
import Images                        from 'coreUI/common/_image'
import underscore                   from 'utils/paisabazaarUnderscore';
import { connect }                  from 'react-redux';
import * as  RouterActions          from 'actions/RouterActions';
import * as  UserActions            from 'actions/UserActions';
import './styles/DownloadAppDropdown.scss';


function DownloadAppDropdown (props){  
        const {actionHandler, onChange,mobileNumber} = props;
        let splitUrl     = (window.location.pathname).split("/");
        let activeURL    = splitUrl[splitUrl.length - 1]; 
        const [downloadAppDropdownState, setDownloadAppDropdownState] = useState(
            {  
                toggleDropdownId  : "",
                defaultOpenMenu   : false,
                isDownloadAppModalActive     : false,
                activeURL : ""
            }
         );
         useEffect(() => {
            document.addEventListener('click', clickOutside, false);            
        },[]);

        const clickHandler=(actionType,data)=>{
            switch(actionType){
                case "app-store"   :window.open('https://apps.apple.com/in/app/id1029403201', '_blank'); break;
                case "google-play" :window.open('https://play.google.com/store/apps/details?id=com.paisabazaar', '_blank'); break;
            }
           //actionHandler('downloadApp', {});
        }
      
        const clickOutside = (e) => { 
            if(e && e.target && e.target.offsetParent && e.target.offsetParent.classList && (e.target.offsetParent.classList[0]== 'downloadAppContainer' || e.target.offsetParent.classList[0]== 'downloadAppModal')){
                return
            }else{
                setDownloadAppDropdownState({...downloadAppDropdownState,isDownloadAppModalActive : false });
            }      
        }     

        return (
            <section className="downloadAppContainer">
                 <Button
                    className={`${downloadAppDropdownState.isDownloadAppModalActive ? "active" :""} btn downloadApp`}
                    btnClickHandler={() => setDownloadAppDropdownState({...downloadAppDropdownState,isDownloadAppModalActive : !downloadAppDropdownState.isDownloadAppModalActive })}
                    buttonText={'Download App'}
                    btnLeftIcon
                    btnLeftIconSrc={downloadAppDropdownState.isDownloadAppModalActive ? '/images/icons/leftMenu/installApp.svg' : '/images/icons/header/appInstall.svg'}
                    btnRightIcon
                    btnRightIconSrc={`/images/_leftMenu/Arrow.svg`}
                />
                {downloadAppDropdownState.isDownloadAppModalActive &&
                    <div className='downloadAppModal'>
                        <h3 className='title'>Download the Paisabazaar Mobile App</h3>
                        <p className='infoText'>Scan or click to Download App on your mobile</p>                       
                        <div className='scanner'>
                            <div className='scannerCode'>
                                <Images src='/images/icons/PB-scan.png' alt='PB-scan' />                                
                            </div>
                            <div className='orSeparator'></div>
                            <div className='appIcon'>
                                <Images src='/images/icons/outboundConsent/google-play.svg' alt='' onClick={()=>clickHandler('google-play')} />
                                <Images src='/images/icons/outboundConsent/app-store.svg' alt=''  onClick={()=>clickHandler('app-store')} />
                            </div>
                        </div>
                    </div>
                }                
            </section>                       
          );
}

const mapStateToProps = state => {
    const { userProfileReducer} = state;
    const userData = underscore.result(userProfileReducer, 'userData', {});
    const { mobileNumber = '', firstName="" } = userData;
    return {userData,mobileNumber, firstName}
};
const mapDispatchToProps = (dispatch) => ({
})

export default withNamespaces('common')(connect(mapStateToProps, mapDispatchToProps)(DownloadAppDropdown));
