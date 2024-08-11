/* import library */
import getConfig from 'next/config';
import PaisabazaarSsoReact from '@paisabazaar/sso-react';

/* import constants */
import { OTP_AUTOREAD } from '@constants';

/* import common services */
// import { getAccessToken } from '@commonServices';

const { publicRuntimeConfig } = getConfig();

const ssoObject = new PaisabazaarSsoReact(publicRuntimeConfig.SSO);

/**
 * used to get the sso widget from core 
 * @param {string} mobileNo 
 * @param {function} callback 
 */
const createSSOLoginLink = (mobileNo, callback) => {
    ssoObject.createLoginLink('d855007a-4277-4737-bb3e-6964b8057804', 'otp', {
        journeyType: 'JOURNEY_OTP',
        additionalData: {
            mobileNo: mobileNo,
            // tnc: 1, // for edit option
            edit_mobile: 1 // for edit option
        },
        version: "2",
        eventPayload: {
            productName: process.env.PRODUCT_NAME,
            action: "application"
        },
        dataCallback: (error, data) => {
            if (data && Object.keys(data)?.length && data?.visitorId) {
                callback(null, data, (mobileNo != data?.mobileNo) ? true : false);
            } else if (error?.error == 'closed_by_user') {
                callback({ error: 'CLOSED_BY_USER' }, null);
            } else {
                callback(error, null);
            }
        }
    });
}

/**
 * used to verify the otp via SSO
 * @param {object} data 
 */
const verifyOTPHandlerSSO = async (data = {}) => {
    return ssoObject.getAuthorizationCode(publicRuntimeConfig.SSO_STATE_ID, data)
        .then((authResponse) => {
            return Promise.resolve(authResponse)
        })
        .catch((err) => {
            return Promise.reject('Error while verifying OTP!!');
        });
};

/**
 * used to resend the OTP
 * @param {string} mobileNo
 * @param {string} visitorId
 */
const resendOtpSSO = async (mobileNo, visitorId) => {
    //productId: process.env.NEXT_PUBLIC_PRODUCT_ID, event: OTP_AUTOREAD, eventPayload: { subDomain: publicRuntimeConfig?.SUB_DOMAIN } }
    return ssoObject.sendOtp({ mobileNo: mobileNo && mobileNo.toString(), visitorId })
        .then(() => {
            return Promise.resolve('sent');
        })
        .catch((err) => {
            return Promise.reject('Error in re-sending OTP!!');
        })
}

/**
 * 
 * @param {string} mobileNumber 
 * @param {string} visitId
 * @returns 
 */
const sendSSOOtp = async (mobileNumber, visitId) => {
    // event: OTP_AUTOREAD, eventPayload: { subDomain: publicRuntimeConfig?.SUB_DOMAIN }productId: process.env.NEXT_PUBLIC_PRODUCT_ID
    return ssoObject.sendOtp({ mobileNo: mobileNumber && mobileNumber.toString(), visitId: visitId })
        .then(async (response) => {
            if (response && response.visitorId) {
                return Promise.resolve(response);
            }
        })
        .catch((err) => {
            return Promise.reject('Error in sending OTP!!');
        });
}

/**
 * used to check is sso session exist or not!!
 * @returns 
 */
const sessionExists = () => {
    return ssoObject.sessionExists();
}


/**
 * used to auto fetch the OTP
 */
const autoFetchOTP = () => {
    return ssoObject.otpAutoRead()
        .then((otp) => {
            if (otp && otp.length) {
                return Promise.resolve(otp);
            }
        })
        .catch((err) => {
            return Promise.reject('Error in OTP Auto Fetch!!');
        });
}

/**
 * used to check is we need to make call for new access token or not and make sure it won't run for agent cases
 * @param {object} sessionDetails 
 * @param {function} callback 
 */
const checkIsSessionExpire = (sessionDetails, callback) => {
    // if (sessionExists() && sessionDetails?.accessToken && !sessionDetails?.isAgentWithRouter && !sessionDetails?.isAgent) {
    //     var currentDate = new Date();
    //     var ssoExpiryDate = new Date(sessionDetails?.accessTokenExpiresAt);
    //     var timeLeft = (ssoExpiryDate.getTime() - currentDate.getTime()) / 60000;
    //     if (timeLeft < 5) {
    //         verifyOTPHandlerSSO()
    //             .then((authResponse) => {
    //                 if (authResponse && authResponse?.authorizationCode) {
    //                     getAccessToken({ authorizationCode: authResponse?.authorizationCode })
    //                         .then((response) => {
    //                             return response.json();
    //                         })
    //                         .then((jsonResponse) => {
    //                             let response = jsonResponse?.response;
    //                             callback({
    //                                 authorizationCode: authResponse?.authorizationCode,
    //                                 customerId: authResponse?.customerId,
    //                                 isSSOExpiryReset: true,
    //                                 mobile_number: authResponse?.mobileNo,
    //                                 ...response
    //                             });
    //                         })
    //                         .catch((err) => { })
    //                 }
    //             })
    //             .catch((err) => { });
    //     } else {
    //         callback();
    //     }
    // } else {
    //     callback();
    // }
}

export {
    verifyOTPHandlerSSO,
    resendOtpSSO,
    sendSSOOtp,
    sessionExists,
    autoFetchOTP,
    checkIsSessionExpire,
    createSSOLoginLink
}