import * as localstorage from  'localstorage'; //{setData, getData}
//import ReactGA          from 'react-ga';
//ReactGA.initialize(ENV_CONFIG.GA.ACCOUNT_ID);

class pbAnalytics {
    //(type=viewed/clicked,label="", GACategory="",AdditionalParams={}, lob="") 
    sendGAEvent=async(type,label,GACategory="",AdditionalParams, isEventhub = false)=>{
        let GACommonData = await localstorage.getData('GACommonData');
        let gaAdditionalParams          = {...GACommonData, ...AdditionalParams}; 
        gaAdditionalParams['category']  = GACategory;    
        gaAdditionalParams['label']     = label;
        switch(type){
            case "viewed" : 
                            gaAdditionalParams['action']    = 'viewed';
                            gaAdditionalParams['event']     = 'virtualPageview';
                            break;
            case "clicked" : 
                            gaAdditionalParams['action']    = "clicked";
                            gaAdditionalParams['event']     = "buttonClick";
                            break;
            }
            if(false === ENV_CONFIG.GA.GTM_SWITCH){
                return false;
            }else if (window && window.dataLayer && window.dataLayer.push) {
                window.dataLayer.push(gaAdditionalParams);
            } 
    };

    setGAAdditionalData=(data)=>{ 
        let GACommonData={};
         // my-account
         let activeURL    = (window.location.pathname).split("/");
         if(activeURL.includes('my-account')){
            GACommonData['lob']        = "myAccount";
            GACommonData['utm_source'] = ApiConstants.MYACCOUNT_UTM_SOURCE,
            GACommonData['platform']   = ApiConstants.MYACCOUNT_PLATFORM
         }else{
            GACommonData['lob']        = 'bureau';
         }
        if(data && data.userProfileReducer){
            const {userData} = data.userProfileReducer;
            GACommonData['visitId']       = underscore.result(data.userProfileReducer , 'visitId', '');
            GACommonData['visitorId']     = underscore.result(data.userProfileReducer , 'visitorId', '');
            GACommonData['PageLanguage']  = underscore.result(data.languageReducer, 'selectedLanguage', 'en'),
            GACommonData['userId']        = underscore.result(userData , 'userId', '');
            GACommonData['monthlyIncome'] = underscore.result(userData, 'monthlyIncome', null),
            GACommonData['employmentType']= underscore.result(userData, 'employmentTypeId', null)
            GACommonData['customerId']    = underscore.result(data.userProfileReducer , 'customerId', '');           
            GACommonData['page']          = window.location.pathname;
            GACommonData['device']        = window.innerWidth >= 768 ? "desktop" : "mobile"; 
            GACommonData['utmData']       = underscore.result(data.userProfileReducer, 'utmDataForUser', null); 

        }
        if(data && utility.isEmpty(data.creditBureauProfileReducer) === false){
            let bureauScore = utility.getBureauScore(data.creditBureauProfileReducer.bureauStatus);           
            GACommonData['userType']      =  underscore.result(data.creditBureauProfileReducer, 'userType', ''); 
            GACommonData['activeBureau']  =  underscore.result(data.creditBureauProfileReducer, 'activeBureau', '');  
            GACommonData['NoOfBureaus']   =  utility.getCountOfBureau(bureauScore);  
            GACommonData['bureau1Band']   =  underscore.result(bureauScore, 'EQUIFAX', '');  
            GACommonData['bureau2Band']   =  underscore.result(bureauScore, 'EXPERIAN', '');  
            GACommonData['bureau3Band']   =  underscore.result(bureauScore, 'HIGHMARK', '');   
            GACommonData['bureau4Band']   =  underscore.result(bureauScore, 'CIBIL', '');
        }
        localstorage.setData("GACommonData", GACommonData); 
        data.setGACommonData ? data.setGACommonData(GACommonData) : null;  
        return GACommonData;
    }
}

export default (new pbAnalytics);
