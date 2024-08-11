import utility from 'utils/utility'
import * as bureauConstants from '../constants/BureauReportConstants';
import * as CreditSavingsConstants from 'constants/CreditSavingsConstants';
let envMod          = process.env.NODE_ENV || "development";
let config          = require( `../config/config.${envMod}.json`);
let siteHostname    = (envMod == 'development') ? 'local.paisabazaar.com:8095' : window.location.hostname;

export const ENV                                        = envMod;
export const LOCAL_HOST_URL                             = "local.paisabazaar.com";
export const ENV_CONFIG                                 = config;
export const SESSION_COOKIE_NAME                        = "SSO_PB_KEY";
export const SESSION_AUTH_TOKEN                         = "SESSION_AUTH_TOKEN";
export const VISIT_COOKIE_NAME                          = "PB_VISIT";
export const MF_USER_COOKIE                             = "NEW_USER";
export const MF_PB_ID                                   = "PbId";
export const SITE_PLATEFORM_URL                         = ENV_CONFIG.SITE_PLATEFORM_URL;
export const SITE_PLATFORM_URL_V2                       = ENV_CONFIG.SITE_PLATFORM_URL_V2; 
export const SHOW_LOYALTY_BANNER                        = ENV_CONFIG.SHOW_LOYALTY_BANNER;
export const SHOW_REWARDS                               = ENV_CONFIG.SHOW_REWARDS;
export const SHOW_NEW_TAX_FILING                        = ENV_CONFIG.SHOW_NEW_TAX_FILING;
export const ANALYTICS_SITE_PLATFORM_URL                = ENV_CONFIG.ANALYTICS_SITE_PLATFORM_URL;
export const MYACCOUNT_SITE_PLATEFORM_URL               = ENV_CONFIG.MYACCOUNT_SITE_PLATEFORM_URL;
export const PL_UNSECURED_SP_SYSTEM                     = ENV_CONFIG.PL_UNSECURED_SP_SYSTEM;
export const FACEBOOK_APP_ID                            = ENV_CONFIG.FACEBOOK_APP_ID;
export const GOOGLE_AUTH_TOKEN                          = ENV_CONFIG.GOOGLE_AUTH_TOKEN;
export const SITE_URL                                   = ((window.location.protocol != '' && window.location.protocol != 'undefined') ? window.location.protocol : 'https:') + '//' + siteHostname;
export const SSO_SWITCH                                 = ENV_CONFIG.SSO.SWITCH;
export const SSO_BUREAU_TOKEN                           = ENV_CONFIG.SSO.BUREAU_TOKEN;
export const SSO_DOMAIN                                 = ENV_CONFIG.SSO.DOMAIN;
export const SSO_ACCOUNT_DOMAIN                         = ENV_CONFIG.SSO.SSOV2.accountsUrl;
export const SSO_ACCOUNT_REDIRECT_LOGIN_URI_DOMAIN      = ENV_CONFIG.SSO.SSOV2.redirectLoginUri;
export const BUREAU_DOMAIN                              = ENV_CONFIG.SSO.BUREAU_DOMAIN;
export const SSO_DEFAULT_TTL                            = ENV_CONFIG.SSO.DEFAULT_TTL;
export const ENABLE_SKIPPABLE_CRQ                       = ENV_CONFIG.ENABLE_SKIPPABLE_CRQ;
export const SKIP_MAIL_ACCESS_CHECK_FOR_INSIGHTS        = ENV_CONFIG.SKIP_MAIL_ACCESS_CHECK_FOR_INSIGHTS;
export const ENABLE_ACQUISITION_GMAIL_CONSENT_POPUP     = ENV_CONFIG.ENABLE_ACQUISITION_GMAIL_CONSENT_POPUP;
export const PDF_PARSING_UPTIME                         = {
                                                            "upTimeStart": "2020-01-09 00:00:00",
                                                            "upTimeEnd"  : "2020-01-09 23:59:59"
                                                        }
export const SHOW_CIBIL_POPOVER                         = false;
export const SHOW_HIGHMARK_POPOVER                      = false;
export const ENABLE_COLLECTIONS_PROOF_UPLOAD            = true;
export const SHOW_TNC_THROUGH_PUCKAR                    = ENV_CONFIG.SHOW_TNC_THROUGH_PUCKAR;
export const PUCKAR_URL                                 = ENV_CONFIG.PUCKAR_URL;
export const PUCKAR_LIB_API                             = "/puckar/lib.js?v=0.1";
export const PUCKAR_ACQUISTION_CONTRACT_ID              = ENV_CONFIG.PUCKAR_ACQUISTION_CONTRACT_ID;
export const PUCKAR_DASHBOARD_CONTRACT_ID               = ENV_CONFIG.PUCKAR_DASHBOARD_CONTRACT_ID;
export const PUCKAR_CREDIT_ASSIST_CONTRACT_ID           = ENV_CONFIG.PUCKAR_CREDIT_ASSIST_CONTRACT_ID;

export const PUCKAR_CREDIT_OUTBOUND_PARENT_CONTRACT_ID  = ENV_CONFIG.PUCKAR_CREDIT_OUTBOUND_PARENT_CONTRACT_ID;
export const PUCKAR_CREDIT_OUTBOUND_CONTRACT_ID         = ENV_CONFIG.PUCKAR_CREDIT_OUTBOUND_CONTRACT_ID;
export const PUCKAR_FINVU_CONTRACT_ID                   = ENV_CONFIG.PUCKAR_FINVU_CONTRACT_ID;
export const PUCKAR_CONSENT                             = "PUCKAR_CONSENT";

export const IDFC_LINE_PRODUCT_ID                       = ENV_CONFIG.IDFC_LINE.PRODUCT_ID;
export const IDFC_LINE_BANK_ID                          = ENV_CONFIG.IDFC_LINE.BANK_ID;
export const IDFC_LINE_GET_FULL_DATA                    = ENV_CONFIG.IDFC_LINE.GET_FULL_DATA;
export const IDFC_LINE_REDIRECT_URL                     = ENV_CONFIG.IDFC_LINE.IDFC_LINE_REDIRECT_URL;

export const CREDIT_CARD_PRODUCT_ID                     = '14';
export const SECRET_KEY                                 = 'KIEM2903LMDO290DIMEO2NGOS8872NG';
export const IMAGE_DOMAIN                               = 'https://static.paisabazaar.com';
export const IMAGE_BASE_URL                             = 'https://static.paisabazaar.com/components/images/Bureau/webImages/';
export const CREDIT_CARD_SITE_ID                        = 'PAISABAZAAR';
export const CLEVERTAP_VERSION                          = "1.1";
export const MARKETING_PAGE_SECRET_KEY                  = "Gy7HAil3zmVb0Tm9jhadya6sq8da1kea9vjs4bb7anszdx8adGsv4UsE269afb4Dda";
export const VERSION                                    = "1.2.4";
export const REPORT_REFRESH_DATE                        = "reportRefreshDate";
export const INSTALL_APP_DOWNLOAD_PDF                   = 'INSTALL_APP_DOWNLOAD_PDF';

export const GET_CITY_BY_PINCODE_API                    = '/api/v1/utility/city/pincode/';
export const GET_CUSTOMER_DETAILS_BY_CUSTOMER_ID_API    = '/api/v1/customer/getCustomerDetails';
export const GET_REPORT_STATUS_API                      = '/api/v1/bureauApplication/reportStatus';
export const ROUTE_FOR_VISIT_CREATION                   = '/api/v1/utility/visit';
export const BUREAU_APPLICATION_APPLY_API               = '/api/v1/bureauApplication/apply';
export const TAX_FILE                                   = '/api/v1/taxfile';
export const PROCESS_APPLICATION_API                    = '/api/v1/bureauApplication/process/';
export const UPDATE_USER_API                            = '/api/v1/customerProfile/update';
export const UPLOAD_DOCUMNETS_API                       = '/api/v1/bureauApplication/applyWithAsset';
export const SOCIAL_LOGIN                               = '/api/v1/visitor/social/login';

export const FETCH_OFFER                                = '/api/v2/offer/getOffers';
export const FETCH_OFFER_V1                             = '/api/v1/offer/getOffers';
export const APPLY_QUOTE_AND_REDIRECT                   = '/api/v1/partner/quoteApply';

export const GET_CREDIT_REPORT_DETAILS_API              = '/api/v1/bureauApplication/getCreditReportDetails';
export const GET_PAYMENT_HISTORY_API                    = '/api/v1/bureauApplication/paymentHistory';//creditReport.getPaymentHistory
export const GET_CREDIT_UTILIZATION_API                 = '/api/v1/bureauApplication/creditUtilization';//creditReport.getCreditUtilization
export const GET_CREDIT_HISTORY_AGE_API                 = '/api/v1/bureauApplication/creditHistoryAge';//creditReport.getCreditHistoryAge
export const GET_TOTAL_ACCOUNTS_API                     = '/api/v1/bureauApplication/totalAccounts';//creditReport.getTotalAccounts
export const GET_ACCOUNT_INFORMATION_API                = '/api/v1/bureauApplication/accountInformation';//creditReport.getAccountInformation

export const GET_APPLICATION_STATUS_BY_NUMBER           = '/api/v1/ppm/applicationStatusByNumber';

export const GET_ACCOUNT_SUB_INFORMATION_API            = '/api/v1/bureauApplication/accountDetails';//creditReport.getAccountDetails
export const GET_PERSONAL_INFORMATION_API               = '/api/v1/bureauApplication/accountUserInformation';//creditReport.getAccountUserInformation
export const GENERATE_REPORT_TOKEN                      = '/api/v1/bureauApplication/generateReportToken';
export const PREVIEW_CREDIT_HEALTH_REPORT               = '/api/v1/bureauApplication/previewCreditHealthReport';
export const DOWNLOAD_REPORT                            = '/api/v1/bureauApplication/downloadReport';
export const DOWNLOAD_HEALTH_REPORT                     = '/api/v1/bureauApplication/downloadHealthReport';
export const DOWNLOAD_CUSTOMER_RECEIPT                  = '/api/v1/bureauApplication/downloadCustomerPaymentReceipt';
export const APPLICATION_EXISTS                         = '/api/v1/bureauApplication/exists';
export const APPLICATION_AUTH                           = '/api/v1/bureauApplication/auth';
export const ANALYTICS_TRACKING                         = '/api/v1/analytics/track';
export const PIXEL_TRACKING                             = '/api/v1/analytics/pixelTracking';
export const GENERATE_PAYMENT_TOKEN                     = '/api/v1/creditAdvisor/generatePaymentToken';
export const CREATE_PRODUCT_LEAD                        = '/api/v1/createProductLead/createLead';
export const CREATE_COLLECTIONS_LEAD                    = '/api/v1/collections/createScorePlusLead';
export const GENERATE_COLLECTIONS_PAYMENT_TOKEN         = '/api/v1/collections/generatePaymentToken';
export const COLLECTIONS_PAYMENT_STATUS                 = '/api/v1/collections/updatePaymentStatus';
export const UPDATE_PRODUCT_LEAD                        = '/api/v1/createProductLead/updateLead';
export const GENERATE_RECTIFICATION_PAYMENT_TOKEN       = '/api/v1/creditAdvisor/generateRectificationPaymentToken';
export const ADVISOR_PAYMENT_STATUS                     = '/api/v1/creditAdvisor/updatePaymentStatus';
export const UPDATE_ASSIST_PAYMENT_STATUS               = '/api/v1/paymentSystem/updateCreditAssistPaymentStatus';
export const RECTIFICATION_PAYMENT_STATUS               = '/api/v1/creditAdvisor/updateRectificationPaymentStatus';
export const GET_REWARD_BALANCE                         = 'api/v1/reward/getBalance';
export const COLLECTIONS_PAYMENT_LINK                   = '/api/v1/collections/paymentLink';

export const GET_DETAIL_AUTH                            = '/api/v1/bureauApplication/getDetailByAuthToken';
export const CREATE_ADVISOR_LEAD                        = '/api/v1/creditAdvisor/createAdvisorLead';
export const CREATE_ADVISOR_LEAD_CAMPAIGN               = '/api/v1/campaign/createAdvisorLead';
export const ADVISOR_PAYMENT_STATUS_CAMPAIGN            = '/api/v1/campaign/updatePaymentStatus';
export const GENERATE_PAYMENT_TOKEN_CAMPAIGN            = '/api/v1/campaign/generatePaymentToken';
export const GET_COLLECTIONS_USER                       = '/api/v1/campaign/getUserForRectification';
export const GET_ADVISOR_VIEWED_PAYMENT_PLAN            = '/api/v1/creditAdvisor/getViewedPaymentPlan';
export const GET_ADVISOR_LAST_PAYMENT_PAID_PLAN         = '/api/v1/creditAdvisor/getLastPaymentPaidPlan';
export const GET_ADVISOR_REQUEST_CALL_BACK              = '/api/v1/creditAdvisor/requestCallback';
export const UPDATE_ADVISOR_LEAD                        = '/api/v1/creditAdvisor/updateAdvisorLead';

// Apis for SSO login
export const SSO_SET_SESSION_DETAILS                    = '/api/v1/myAccount/set';
export const SSO_GET_SESSION_DETAILS                    = '/api/v1/myAccount/get';
export const DELETE_ACCOUNT_DETAILS                     = '/api/v1/customerProfile/deactivateCustomerProfile';
export const PAISA_TAX_BASE_URL                         = 'https://tax.paisabazaar.com';
export const UNSUBSCRIBE_USER                           = '/api/v1/customerProfile/unsubscribeCustomer';
export const UNSUBSCRIBE_EMAIL                          = '/api/v1/customerProfile/unsubscribeEmail';
export const UNSUBSCRIBE_EMAIL_STATUS                   = '/api/v1/customerProfile/unsubscribeEmailStatus';
export const RESUBSCRIBE_USER                           = '/api/v1/customerProfile/resubscribeCustomer';
export const GET_SCORE_CHANGE_REASONS                   = '/api/v1/bureauApplication/getScoreChangeReasons';
export const ACTIVATE_INSIGHTS                          = '/api/v1/customerProfile/activateInsights';
export const GET_USER_PROFILE_INFO_SHERLOCK             = '/api/v1/customerProfile/customerSummaryFromSherlock';
export const MF_SAVE_USER_ACTIVITY                      = '/api/User/SaveUsersActivity';
export const VISITOR_SSO_LOGIN                          = '/api/v1/visitor/ssoLogin';
export const NOTIFY_CUSTOMER_BY_SMS                     = '/api/v1/communication/notify';
export const NOTIFY_CUSTOMER_BY_AGENT                   = '/api/v1/communication/notifyCustomerByAgent';
export const NOTIFY_CUSTOMER_FOR_CAMPAIGN_BY_SMS        = '/api/v1/campaign/campaignLinkSms';
export const ENABLE_DISCOUNT_VOUCHER                    = '/api/v1/paymentSystem/enableOnDemandDiscountVoucher';
export const PAISA_TAX_URL_V2                           = 'http://tax.paisabazaar.com'
export const CREATE_APPOINTMENT_BY_LEAD_ID              = '/api/v1/creditAdvisor/createAppointmentByLeadId';
export const GET_APPOINTMENT_DETAIL_BY_LEAD             = '/api/v1/creditAdvisor/getAppointmentDetailByLeadId';
export const GET_LATEST_PAYMENT_CREDIT_ASSIST           = '/api/v1/creditAdvisor/getLatestPayment';
export const GET_BEACON_CUSTOMER_DETAIL                 = '/api/v1/beacon/details';
export const GET_CUSTOMER_DETAIL_BY_BEACON_ID           = '/api/v1/beacon/campaignDetail';
export const COMMON_GENERATE_PAYMENT_TOKEN_API          = '/api/v1/paymentSystem/generatePaymentToken';
export const CREDITCOACH_GENERATE_PAYMENT_TOKEN_API     = '/api/v1/paymentSystem/generatePaymentTokenForCreditCoach';
export const CREDIT_HEALTH_PAYMENT_HISTORY              = '/api/v1/paymentSystem/creditHealthPaymentHistory'
export const GET_CUSTOMER_DETAIL_BY_LEAD                = '/api/v1/campaign/customerDetailByLeadId';
export const GET_REWARD_ASSETIFO                        = '/api/v1/referral/getAssetInfo'
export const GET_SHORT_LINK                             = '/api/v1/referral/getShareLink';
export const ACCOUNT_RESOLVE_NOW_EVENT                  = 'Bu_collection_Payment_link_CRMT0_SMS';
export const SCORE_IMPROVEMENT_REPORT_DOWNLOAD_API      = '/api/v1/subscriptionReport/downloadScoreImprovementReport';
export const NOTIFY_IVR_CUSTOMER                        = '/api/v1/communication/notifyCustomer';
export const REFRESH_USER_REPORT                        = '/api/v1/bureauApplication/refreshUserApplicationByBureau';
export const SEND_NOTIFICATION                          = '/api/v1/notification/captureEvent';
export const APPLY_USER_REPORT_BY_BUREAU                = '/api/v1/bureauApplication/applyBureauReportByBureauType';
export const GET_CAMPAIGN_DETAILS_BY_PBGUID             = '/api/v1/beacon/getCampaignDetailsByPbguid';
export const GET_CITY_LIST                              = '/api/v1/utility/city'
export const GET_BANK_LIST                              = '/api/v1/utility/institution/4'
export const GET_USER_CREDIT_ALERTS_SENT                = '/api/v1/creditAlerts/sent';
export const GET_USER_CREDIT_ALERTS                     = '/api/v1/creditAlerts/getUserAllAlerts';
export const GET_SCORE_TRENDS                           = '/api/v1/bureauApplication/getScoreTrend';
export const GET_TOP_CITY_LIST                          = '/api/v1/utility/getTopCity'
export const GET_TOP_INSTITUTION_LIST                   = '/api/v1/utility/getTopInstitution'
export const GET_ANNUAL_TURNOVER_DATA                   = '/api/v1/utility/getAnnualTurnoveRange'
export const CANCEL_CHR_FREE_TRIAL_SUBSCRPTION_API      = '/api/v1/paymentSystem/cancelChrFreeTrialSubscription';
export const FETCH_CHR_FREE_TRIAL_SUBSCRPTION_STATUS    = '/api/v1/paymentSystem/fetchChrFreeTrialSuscriptionStatus';

export const CREDIT_SAVINGS_REQUEST_API_URL                         = `${ENV_CONFIG.MYACCOUNT_SITE_PLATEFORM_URL}/api/v1/ovi/fi/request`;
export const CREDIT_SAVINGS_FETCH_API_URL                           = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/FI/fetch`;
export const CREDIT_SAVINGS_TRANSACTION_API_URL                     = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/FI/transaction/`;
export const CREDIT_SAVINGS_FETCH_USER_ACCOUNT_INFO                 = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/FI/fetchUserAccountInfo`;
export const CREDIT_SAVINGS_FETCH_USER_INFO_FROM_APPLICATION_ID     = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/consent/user/application`;
export const CREDIT_SAVINGS_DEACTIVATE_USER_DATA                    = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/FI/deActivateUserData`;
export const CREDIT_SAVINGS_CONSENT_API                             = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/consent`;
export const CREDIT_SAVINGS_STATE_CAPTURE                           = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/consent/stateCapture`;
export const CREDIT_SAVINGS_GET_STATE                               = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/consent/state/getState`;
export const CREDIT_SAVINGS_GET_ACCOUNT_DETAIL                      = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/fi/getAccountsDetail/`;
export const CREDIT_SAVINGS_REFRESH_DATA                            = `${ENV_CONFIG.OVI_PLATEFORM_URL}/api/v1/FI/refreshData`;

export const CREDIT_SAVINGS_APPLICATION_ID_COOKIE       = "CREDIT_SAVINGS_APPLICATION_ID";
export const CREDIT_SAVINGS_APPLICATION_DEFAULT_TTL     = 90;    //days
export const AGENT_TOKEN_DEFAULT_TTL                    = 600000;   //miliseconds eq 10 minutes
export const CHR_DOWNLOAD_MODAL_TTL                     = 300000;   //miliseconds eq 5 minutes
export const OPEN_CHR_DOWNLOAD_MODAL                    = 'CHR_DOWNLOAD';
export const EXPERT_GUIDE_COOKIE                        = 'PRO_EXPERT_GUIDE';
export const AGENT_TOKEN                                = "AGENT_TOKEN";
export const CREDIT_HEALTH_CAMPAIGN_PAGE_SOURCE         = "pgDropOffCampaign";
export const MY_ACCOUNT_TRANSACTION_API_URL             = `${MYACCOUNT_SITE_PLATEFORM_URL}/api/v1/myAccount/transactions`;

export const APPLICATION_RESPONSE_TYPE = [
    'APPROVED',
    'PARTIAL_APPROVED',
    'PRE_APPROVED_WITH_KYC',
    'PRE_APPROVED_WITHOUT_KYC',
    'APPROVED_WITH_NO_AIP',
    'ON_HOLD',
    'DECLINED',
    'TIMEOUT',
    'ERROR',
    'CURING_QUEUE',
    'VALIDATION_ERROR',
    'DUPLICATE_APPLICATION'
];


export const SOCIAL_LOGIN_PROVIDER_GOOGLE       = 'google';
export const SOCIAL_LOGIN_PROVIDER_FACEBOOK     = 'facebook';

export const ANALYTICS_EVENTS = {
    BU_VIEWED_PRE_CRQ                                                   : 'BU_Viewed_PreCRQ',  //done
    BU_CLICKED_GET_OTP                                                  : 'BU_Clicked_getOTP', //done
    BU_VERIFIED_OTP                                                     : 'BU_Verified_OTP',   //done
    BU_CLICKED_PRECRQ_GETCRQ                                            : 'BU_Clicked_PreCRQ_getCRQ', // done
    BU_VIEWED_RR                                                        : 'BU_Viewed_RR', //implemented on apply with direct,
    BU_VIEWED_CRQ                                                       : 'BU_Viewed_CRQ',
    BU_SUBMITED_CRQ                                                     : 'BU_Submitted_CRQ',
    BU_VIEWED_KYC                                                       : 'BU_Viewed_KYC',
    BU_SUBMITTED_ID_PROOF                                               : 'BU_Submitted_IDProof',
    BU_SUBMITTED_ADDRESS_PROOF                                          : 'BU_Submitted_AddressProof',
    BU_VIEWED_TECH_FAIL                                                 : 'BU_Viewed_Techfail',//not implemented // not available
    BU_VIEWED_REAPPLY                                                   : 'BU_Viewed_ReApply',
    BU_CLICKED_REAPPLY                                                  : 'BU_Clicked_ReApply',
    BU_VIEWED_NOHIT                                                     : 'BU_Viewed_NoHit',
    BU_CLICKED_DOWNLOAD_REPORT                                          : 'BU_Clicked_downloadReport',//not implemented
    BU_CLICKED_FACTORS                                                  : 'BU_Clicked_Factors',
    BU_CLICKED_FACTOR_KNOWMORE                                          : 'BU_Clicked_Factor_KnowMore',//not implemented
    BU_CLICKED_FACTOR_NOTICE_AN_ERROR                                   : 'BU_Clicked_Factors_Notice_an_error', //done
    BU_CLICKED_FACTOR_REPORT_TO_CIBIL                                   : 'BU_Clicked_Factors_Report_to_CIBIL', //done
    BU_CLICKED_TREND                                                    : 'BU_Clicked_Trend',
    BU_CLICKED_HAMBURGER                                                : 'BU_Clicked_Hamburger',
    BU_CLICKED_MOBILE_LOGO                                              : 'BU_Clicked_Mobile_Logo',
    BU_CLICKED_KNOWPAN                                                  : 'BU_Clicked_KnowPAN',//not implemented
    BU_SUBMITTED_APPLYFORM                                              : 'BU_Submitted_ApplyForm', //done
    BU_VIEWED_CCR                                                       : 'BU_Viewed_CCR', //done
    BU_VIEWED_CCR_EMPDETAILS                                            : 'BU_Viewed_CCR_EmpDetails',
    BU_SUBMITTED_CCR_EMPDETAILS                                         : 'BU_Submitted_CCR_EmpDetails',
    BU_CLICKED_REFERRAL_POPUP                                           : 'BU_Clicked_ReferralPopup',//done
    BU_VIEWED__REFERRAL_POPUP                                           : 'BU_Viewed_ReferralPopup', //done
    BU_CLICKED_REFERRAL_BANNER                                          : 'BU_Clicked_ReferralBanner',
    BU_CLICKED_REFERRAL_REPORT                                          : 'BU_Clicked_ReferralToReport',//not implemented
    BU_VIEWED_REFERRAL_PAGE                                             : 'BU_Viewed_ReferralPage',//not implemented
    BU_CLICKED_REFERRAL                                                 : 'BU_Clicked_ReferNow',//not implemented
    BU_CLICKED_REFERRAL_HEADER                                          : 'BU_Clicked_referralheader',//not implemented
    BU_VIEWED_DASHBOARD                                                 : 'BU_Viewed_Dashboard',//not implemented
    BU_VIEWED_OFFERS                                                    : 'BU_Viewed_Offers',
    BU_DISPLAYED_OFFERS                                                 : 'BU_Displayed_Offers',
    BU_VIEWED_OFFER_POPUP                                               : 'BU_Viewed_OfferPopup',
    BU_VIEWED_CC_POPUP                                                  : 'BU_Viewed_CCPopup',
    BU_CLICKED_OFFER_POPUP                                              : 'BU_Clicked_OfferPopup',
    BU_CLICKED_CC_POPUP                                                 : 'BU_Clicked_CCPopup',
    BU_VIEWED_OFFER_TAB                                                 : 'BU_Viewed_OfferTab',
    BU_SUBMITTED_XSELL_PL                                               : 'BU_xsell_PLofferstab_submit',//not implemented
    BU_SUBMITTED_XSELL_PLBL                                             : 'BU_xsell_PLBLofferstab_submit',//not implemented
    BU_SUBMITTED_XSELL_THANKU                                           : 'BU_XSell_thankyoupopup_viewed',//not implemented
    BU_REPORT_RECEIVED_RR                                               : 'BU_Received_RR',
    BU_REPORT_NO_HIT_RNH                                                : 'BU_Received_RNH',
    BU_CLICKED_OFFER                                                    : 'BU_Clicked_Offer',
    BU_APPLY_RESPONSE                                                   : 'BU_Received_ApplyResponse',
    BU_VIEWED_XSELL_CC                                                  : 'BU_Viewed_Xsell_CC',
    BU_REPORT_RECEIVED                                                  : 'BU_report_received', // event for GA and cleverTap
    BU_CLICKED_SCORE_COMPARISON_BUTTON                                  : 'Bu_Clicked_ScoreComparison_Button',
    BU_CLICKED_SCORE_COMPARISON_TAB                                     : 'Bu_Clicked_Scorecomparison_Tab',
    BU_CLICKED_SCORE_COMPARISON_VIEW_REPORT                             : 'Bu_Clicked_ScoreComparison_ViewReport',
    BU_CLICKED_SCORE_COMPARISON_FAQ                                     : 'BU_Clicked_ScoreComparison_FAQ',
    BU_VIEWED_SCORE_COMPARISON                                          : 'BU_Viewed_ScoreComparison',
    BU_RECEIVED_REVISIT_USER                                            : 'BU_received_revisit_user',
    BU_VIEWED_CIBIL_OTP                                                 : 'BU_Viewed_Cibil_OTP',
    BU_SUBMITED_CIBIL_OTP                                               : 'BU_Submitted_Cibil_OTP',
    BU_RE_REQUESTED_CIBIL_OTP                                           : 'BU_Re_Requested_Cibil_OTP',
    BU_SKIPPED_CIBIL_CRQ_QUESTION                                       : 'BU_Skipped_Cibil_Crq_Question',
    BU_VIEWED_COLLECTIONS                                               : 'BU_Viewed_Collections',
    BU_CLICKED_COLLECTIONS                                              : 'BU_Clicked_Collections',
    BU_VIEWED_COLLECTIONS_PAY                                           : 'BU_Viewed_Collections_Pay',
    BU_CLICKED_COLLECTIONS_PAY                                          : 'BU_Clicked_Collections_Pay',
    BU_VIEWED_CREDIT_ASSIST                                             : 'BU_Viewed_Credit_Assist',
    BU_CLICKED_CREDIT_ASSIST_BUTTON                                     : 'BU_Clicked_Credit_Assist_Button',
    BU_CLICKED_CREDIT_ASSIST_PAY_BUTTON                                 : 'BU_Clicked_Credit_Assist_Pay_Button',
    BU_VIEWED_CREDIT_ASSIST_IFRAME                                      : 'BU_Viewed_Credit_Assist_Iframe',    
    BU_CREDIT_ASSIST_PAYMENT_STATUS                                     : 'BU_Credit_Assist_Payment_Status',
    BU_CREDIT_ASSIST_BACK_TO_REPORT                                     : 'BU_Credit_Assist_BACK_TO_REPORT',
    BU_CLICKED_DELETE_FAQ                                               : 'BU_Clicked_delete_FAQ',
    BU_CLICKED_CONFIRM_DELETE                                           : 'BU_Clicked_confirm_delete',
    BU_VIEWED_SUCCESS_DELETE                                            : 'BU_Viewed_success_delete',
    BU_CLICKED_RETRY_DELETE                                             : 'BU_Clicked_retry_delete',
    BU_CLICKED_CREDIT_ASSIST_HIW                                        : 'BU_Clicked_Credit_Assist_HIW',
    BU_Viewed_NoHitReapply                                              : 'BU_Viewed_NoHitReapply',
    BU_Submitted_NoHitReapply                                           : 'BU_Submitted_NoHitReapply',
    BU_CLICKED_CREDIT_ASSIST_HINDI_TRANSLATE                            : 'BU_Clicked_Credit_Assist_Hindi_Translate',
    BU_Viewed_TaxFilingForm                                             : 'BU_Viewed_TaxFilingForm',
    BU_Submitted_TaxFilingForm                                          : 'BU_Submitted_TaxFilingForm',
    BU_CLICKED_CREDIT_ASSIST_RETRY_IFRAME                               : 'BU_Clicked_Credit_Assist_RetryIFrame',
    BU_CLICKED_CREDIT_ASSIST_ReturnMyAccount                            : 'BU_Clicked_Credit_Assist_ReturnMyAccount',
    BU_CLICKED_CREDIT_ASSIST_ReturnLandingPage                          : 'BU_Clicked_Credit_Assist_ReturnLandingPage',
    BU_Submitted_CCR_StepOne                                            : 'BU_Submitted_CCR_StepOne',
    BU_Viewed_OTPOverlay                                                : 'BU_Viewed_OTPOverlay',
    BU_Viewed_CCR_StepTwo                                               : 'BU_Viewed_CCR_StepTwo',
    BU_CLICKED_UNSUBSCRIBE_FAQ                                          : 'BU_Clicked_Unsubscribe_Faq',
    BU_CLICKED_CONFIRM_UNSUBSCRIBE                                      : 'BU_Clicked_Confirm_Unsubscribe',
    BU_VIEWED_SUCCESS_UNSUBSCRIBE                                       : 'BU_Viewed_Success_Unsubscribe',
    BU_CLICKED_RETRY_UNSUBSCRIBE                                        : 'BU_Clicked_Retry_Unsubscribe',
    BU_VIEWED_NBUREAU_NONRR_GETREPORT                                   : 'BU_Viewed_nbureau_nonRRgetReport',
    BU_CLICKED_NBUREAU_NONRR_GETREPORT                                  : 'BU_Clicked_nbureau_nonRRgetReport',
    BU_VIEWED_OFFERPOPUP                                                : 'BU_Viewed_OfferPopup',
    BU_CLICKED_OFFERPOPUP                                               : 'BU_Clicked_OfferPopup',
    BU_CLICKED_REFERRAL_WIDGET                                          : 'BU_Clicked_ReferralWidget',
    BU_VIEWED_REFERRAL_WIDGET                                           : 'BU_Viewed_ReferralWidget',    
    BU_CLICKED_REFERRAL_BANNER_KNOW_MORE                                : 'BU_Clicked_ReferralBanner_KnowMore',    
    BU_CLICKED_TAXFILING                                                : 'BU_Click_TaxFiling',
    BU_CLICKED_TAXFILING_HEADER                                         : 'BU_Clicked_taxfilling_header',
    BU_CLICKED_RESUBSCRIBE                                              : 'BU_clicked_Resubsubscribe    ',
    BU_VIEWED_SUCCESS_RESUBSCRIBE                                       : 'BU_Viewed_Success_Resubscribe',
    BU_CLICKED_CONFIRM_RESUBSCRIBE                                      : 'BU_Clicked_Confirm_Resubscribe',
    BU_CLICKED_RETRY_RESUBSCRIBE                                        : 'BU_Clicked_Retry_Resubscribe',
    BU_LOGGEDIN_CCR                                                     : 'BU_loggedin_CCR',
    BU_VIEWED_SCORECHANGES                                              : 'BU_Viewed_ScoreChanges',
    BU_CLICKED_SCORECHANGES                                             : 'BU_Clicked_ScoreChanges',
    BU_VIEWED_ALTERNATE_NUMBER                                          : 'BU_Viewed_AlternateNumber',
    BU_CLICKED_G_CALENDER                                               : 'BU_Clicked_G_Calender',
    BU_CLICKED_XSELL_DISCLAIMER                                         : 'BU_Clicked_Xsell_Dislaimer',
    BU_CLICKED_SCORECHANGES_NEWACCOUNT                                  : 'BU_Clicked_ScoreChange_NewAccount',
    BU_CLICKED_SCORECHANGES_DPD                                         : 'BU_Clicked_ScoreChange_DPD',
    BU_CLICKED_SCORECHANGES_Application                                 : 'BU_Clicked_ScoreChange_Application',
    BU_RECEIVED_REVISIT_USER                                            : 'BU_received_revisit_user',
    BU_CLICKED_SCORECHANGES_CLOSEDACCOUNT                               : 'BU_Clicked_ScoreChange_ClosedAccount',
    BU_CLICKED_CREDIT_ASSIST_EXPAND_CTA                                 : 'BU_Clicked_Credit_Assist_Expand_CTA',
    BU_CLICKED_CREDIT_ASSIST_COLLAPSE_CTA                               : 'BU_Clicked_Credit_Assist_Collapse_CTA',
    BU_CLICKED_CREDIT_ASSIST_PAY_BUTTON_SECOND                          : 'BU_Clicked_Credit_Assist_Pay_Button_Second',
    BU_VIEWED_CREDIT_ASSIST_LANDINGPAGE_ENG                             : 'BU_Viewed_Credit_Assist_LandingPage_Eng',
    BU_VIEWED_CREDIT_ASSIST_LANDINGPAGE_HIN                             : 'BU_Viewed_Credit_Assist_LandingPage_Hin',
    BU_VIEWED_OVERLAY                                                   : 'BU_Viewed_Overlay',
    BU_CLICKED_OVERLAYCREDITASSIST                                      : 'BU_Clicked_OverlayCreditAssist',
    BU_VIEWED_ACCOUNT_DETAILS                                           : 'BU_Viewed_AccountDetails',   
    BU_CLICKED_REPORT_CHANGES                                           : 'BU_Clicked_ReportChanges',
    BU_VIEWED_GET_SECOND_SCORE                                          : 'BU_Viewed_GetSecondScore',
    BU_CREDIT_ASSIST_PAY_NB                                             : 'BU_Credit_Assist_Pay_NB',
    BU_CREDIT_ASSIST_PAY_CC                                             : 'BU_Credit_Assist_Pay_CC',
    BU_CREDIT_ASSIST_PAY_WALLET                                         : 'BU_Credit_Assist_Pay_Wallet',
    BU_CREDIT_ASSIST_PAY_UPI                                            : 'BU_Credit_Assist_Pay_UPI',
    BU_CLICKED_CRQ_PRECRQTIP                                            : 'BU_Clicked_CRQ_PreCrqTip',
    BU_Clicked_Header                                                   : 'BU_Clicked_Header',
    BU_VIEWED_CAROUSEL_INSURANCE                                        : 'BU_Viewed_Carosel_Insurance',
    BU_CLICKED_CAROUSEL_INSURANCE                                       : 'BU_Clicked_Carousel_Insurance',
    BU_Viewed_WhatsappConsent                                           : 'BU_Viewed_WhatsappConsent',
    BU_Applied_WhatsappConsent                                          : 'BU_Applied_WhatsappConsent',
    BU_Applied_WhatsappConsent_PROFILE                                  : 'BU_Applied_WhatsappConsent_Profile',
    BU_Applied_WhatsappConsent_DASHBOARD                                : 'BU_Applied_WhatsappConsent_Dashboard',
    BU_Rejected_WhatsappConsent                                         : 'BU_Rejected_WhatsappConsent',
    BU_SKIP_CRQ                                                         : 'BU_Skip_CRQ',
    BU_Clicked_Confirmation                                             : 'BU_Clicked_Confirmation',
    BU_CLICKED_SET_REMINDER                                             : 'BU_Clicked_setReminder',
    TF_BUREAU_TICKER                                                    : 'tf_bureau_ticker',
    BU_VIEWED_CREDIT_ASSIST_ADDON                                       : 'BU_Viewed_Credit_Assist_AddOn',
    BU_CLICKED_CREDIT_ASSIST_ADDON                                      : 'BU_Clicked_Credit_Assist_AddOn',
    BU_CLICKED_CREDIT_ASSIST_ADDON_ADDITIONAL                           : 'BU_Clicked_Credit_Assist_AddOn_additional',
    BU_Clicked_CreditPlus                                               : 'BU_Clicked_CreditPlus',
    BU_VIEWED_CREDIT_PLUS                                               : 'BU_Viewed_CreditPlus',
    BU_VIEWED_COLLECTIONS_IFRAME                                        : 'BU_Viewed_Collections_Iframe',
    BU_PAYMENT_STATUS                                                   : 'BU_Payment_Status',
    BU_VIEWED_DASH                                                      : 'BU_Viewed_Dash',
    BU_CLICKED_UNLOCKNOWCONSENT                                         : 'BU_Clicked_UnlockNowConsent',
    BU_ACTIVATED_CONSENT                                                : 'BU_Activated_Consent',
    BU_FAILED_CONSENT                                                   : 'BU_Failed_Consent',
    BU_Viewed_NEFT_Cheque_Details                                       : 'BU_Viewed_NEFT_Cheque_Details',
    BU_VIEWED_DASHGCONSENT                                              : 'bu_viewed_dashGconsent',
    BU_CLICKED_DASHLINKNW                                               : 'bu_clicked_dashlinknw',
    BU_CLICKED_DASHX                                                    : 'bu_clicked_dashX',
    BU_VIEWED_ACQUGCONSENT                                              : 'bu_viewed_acquGconsent',
    BU_CLICKED_ACQULINKNW                                               : 'bu_clicked_acqulinknw',
    BU_CLICKED_ACQUX                                                    : 'bu_clicked_acquX',
    BU_VIEWED_CRINSIGHTTILE                                             : 'bu_viewed_crinsighttile',
    BU_CLICKED_CRINSIGHTLINKNW                                          : 'bu_clicked_crinsightlinknw',
    BU_DASHBOARD_LANGUAGE_CHANGE                                        : 'BU_DASHBOARD_LANGUAGE_CHANGE',
    BU_CLICKED_GOGLEAUTHX                                               : 'bu_clicked_gogleAuthX',
    BU_VIEWED_CREDIT_ASSIST_LANDING_PAGE                                : 'BU_Viewed_CreditAssist_LandingPage',
    BU_VIEWED_ACQUIGCONST2                                              : 'Bu_viewed_acquigconst2',
    BU_CLICKED_ACQUI2LINKNW                                             : 'Bu_clicked_acqui2linknw',
    BU_CLICKED_ACQUIX2                                                  : 'bu_clicked_acquiX2',
    BU_VIEWED_DASHCONST2                                                : 'Bu_viewed_dashconst2',
    BU_CLICKED_DASH2LINKNW                                              : 'Bu_clicked_dash2linknw',
    BU_CLICKED_DASHX2                                                   : 'bu_clicked_dashX2',
    BU_VIEWED_FAQ                                                       : 'BU_Viewed_FAQ', 
    BU_CLICKED_CONTACTUS                                                : 'BU_clicked_contactus',
    BU_LOGOUT_USER                                                      : 'BU_LOGOUT_USER',
    BU_CLICKED_PROFILE                                                  : 'BU_clicked_profile',
    BU_VIEWED_CONTACTUS                                                 : 'BU_viewed_contactus',    
    BU_CLICKED_CREDIT_SCORE                                             : 'BU_clicked_credit_score',    
    BU_VIEWED_RECTIFICATION_PAYMENT_OPTIONS                             : 'BU_Viewed_PaymentOptions',
    BU_VIEWED_CREDIT_ASSIST_LANDING_PAGE_INTERNAL                       : 'BU_Viewed_CreditAssist_LandingPage_Internal',
    BU_CLICKED_CREDIT_ASSIST_BUTTON_INTERNAL                            : 'BU_Clicked_Credit_Assist_Button_Internal',
    BU_CLICKED_CREDIT_ASSIST_PAYMENT_OPTIONS                            : 'BU_Clicked_Credit_Assist_Payment_Options',
    BU_VIEWED_CREDIT_PLUS_RETENTION                                     : 'BU_Viewed_CreditPlus_Retention',
    BU_CLICKED_CREDIT_PLUS_RETENTION                                    : 'BU_Clicked_CreditPlus_Retention',
    BU_CLICKED_BUREAU_RETENTION                                         : 'BU_Clicked_Bureau_Retention',    
    BU_VIEWED_CREDIT_PLUS_LANDING_PAGE                                  : 'BU_Viewed_CreditPlus_LandingPage',
    BU_CLICKED_CREDIT_PLUS_LANDING_PAGE                                 : 'BU_Clicked_CreditPlus_LandingPage',
    BU_REFER_WIN                                                        : 'BU_Refer_Win',
    BU_CLICKED_REFER_WIN                                                : 'BU_Clicked_Refer_Win',
    BU_VIEWED_EXTERNAL_MARKETING_LANDING_PAGE                           : "BU_VIEWED_EXTERNAL_MARKETING_LANDING_PAGE",
    BU_CLICKED_EXTERNAL_MARKETING_CTA                                   : "BU_CLICKED_EXTERNAL_MARKETING_CTA",
    BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PRICE                         : "BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PRICE",
    BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_CTA                  : "BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_CTA",
    BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_STATUS                : "BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_STATUS",
    BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_THANKS                : "BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_THANKS",
    BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_THANKS_CTA           : "BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_THANKS_CTA",
    BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_CANCEL_RETENTION              : "BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_CANCEL_RETENTION",
    BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_RETENTION_BUREAU_CTA         : "BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_RETENTION_BUREAU_CTA",
    BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_RETENTION_RETRY_CTA          : "BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_RETENTION_RETRY_CTA",
    BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_FAILED                : "BU_VIEWED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_FAILED",
    BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_FAILED_RETRY         : "BU_CLICKED_EXTERNAL_MARKETING_ADVISORY_PAYMENT_FAILED_RETRY",
    BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PRICE                    : "BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PRICE",
    BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_CTA             : "BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_CTA",
    BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_STATUS           : "BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_STATUS",
    BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_THANKS           : "BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_THANKS",
    BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_THANKS_CTA      : "BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_THANKS_CTA",
    BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_CANCEL_RETENTION         : "BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_CANCEL_RETENTION",
    BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_RETENTION_BUREAU_CTA    : "BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_RETENTION_BUREAU_CTA",
    BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_RETENTION_RETRY_CTA     : "BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_RETENTION_RETRY_CTA",
    BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_FAILED           : "BU_VIEWED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_FAILED",
    BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_FAILED_RETRY    : "BU_CLICKED_EXTERNAL_MARKETING_RECTIFICATION_PAYMENT_FAILED_RETRY",
    BU_CREDIT_PLUS_USER_NOT_ELIGIBLE                                    : 'BU_CreditPlus_User_Not_Eligible',
    BU_CREDIT_ASSIST_USER_NOT_ELIGIBLE                                  : 'BU_CreditAssist_User_Not_Eligible',
    BU_CLICKED_CREDIT_RECTIFICATION_RETURN_LANDING_PAGE                 : 'BU_Clicked_Credit_Rectification_ReturnLandingPage',
    BU_CLICKED_CREDIT_RECTIFICATION_PAYMENT_OPTIONS                     : 'BU_Clicked_PaymentOptions',
    BU_REFERRAL_PROMOTION_BANNER                                        : 'BU_REFERRAL_PROMOTION_BANNER',
    BU_REFERRAL_PROMOTION_CLICK                                         : 'BU_REFERRAL_PROMOTION_CLICK',
    BU_COLLECTION_UPLOAD_PAYMENT_PAGE_VIEWED                            : 'BU_COLLECTION_UPLOAD_PAYMENT_PAGE_VIEWED',
    BU_COLLECTION_PROOF_UPLOAD                                          : "BU_COLLECTION_PROOF_UPLOAD",
    BU_COLLECTION_PROOF_DETAILS_VIEWED                                  : "BU_COLLECTION_PROOF_DETAILS_VIEWED",
    BU_COLLECTION_PROOF_DETAILS_SUBMIT                                  : "BU_COLLECTION_PROOF_DETAILS_SUBMIT",
    BU_CLICKED_CORONA_BANNER                                            : "BU_CLICKED_CORONA_BANNER",
    BU_ON_DEMAND_REFRESH_CLICKED                                        : "BU_ON_DEMAND_REFRESH_CLICKED",
    BU_ON_DEMAND_REFRESH_VIEWED                                         : "BU_ON_DEMAND_REFRESH_VIEWED",
    BU_ON_DEMAND_REFRESH_CLICK_RESPONSE                                 : "BU_ON_DEMAND_REFRESH_CLICK_RESPONSE",
    BU_COLLECTION_PLAN_VIEW                                             : 'BU_COLLECTION_PLAN_VIEW',
    BU_COLLECTION_PLAN_CLICK                                            : 'BU_COLLECTION_PLAN_CLICK',
    BU_COLLECTION_PLAN_UPDATE                                           : 'BU_COLLECTION_PLAN_UPDATE',
    BU_COLLECTION_SEND_SMS                                              : 'BU_COLLECTION_SEND_SMS',
    BU_CLICKED_DASHBOARD_CREDIT_FACTOR                                  : 'BU_CLICKED_DASHBOARD_CREDIT_FACTOR',
    BU_CLICKED_CREDIT_FACTOR_BACK_BUTTON                                : "BU_CLICKED_CREDIT_FACTOR_BACK_BUTTON",
    BU_CLICKED_CREDIT_FACTOR_NAVIGATION_BUTTON                          : "BU_CLICKED_CREDIT_FACTOR_NAVIGATION_BUTTON",
    BU_VIEWED_CREDIT_FACTOR_PAGE                                        : "BU_VIEWED_CREDIT_FACTOR_PAGE",
    BU_CLICKED_CREDIT_FACTOR_KNOW_MORE                                  : "BU_CLICKED_CREDIT_FACTOR_KNOW_MORE",
    BU_CLICKED_VIEW_HIDE_DETAILS                                        : "BU_CLICKED_VIEW_HIDE_DETAILS",
    BU_CLICKED_CREDIT_FACTORS_REPORT_ERROR                              : "BU_CLICKED_CREDIT_FACTORS_REPORT_ERROR",
    BU_CLICKED_CREDIT_FACTOR_DOWNLOAD_REPORT_BUTTON                     : "BU_CLICKED_CREDIT_FACTOR_DOWNLOAD_REPORT_BUTTON",
    BU_SCORE_TREND_SWIPE                                                : "BU_SCORE_TREND_SWIPE",
    BU_CLICKED_SCORE_TREND_ARROWS_CLICKED                               : "BU_CLICKED_SCORE_TREND_ARROWS_CLICKED",
    BU_SCORE_CHANGE_REASONS_DROPDOWN                                    : "BU_SCORE_CHANGE_REASONS_DROPDOWN",
    BU_MISSING_EMPLOYMENT_DETAILS_POPUP_VIEWED                          : "BU_MISSING_EMPLOYMENT_DETAILS_POPUP_VIEWED",
    BU_MISSING_EMPLOYMENT_DETAILS_FIRST_SCREEN_CTA_CLICKED              : "BU_MISSING_EMPLOYMENT_DETAILS_FIRST_SCREEN_CTA_CLICKED",
    BU_MISSING_EMPLOYMENT_DETAILS_FINAL_SCREEN_CTA_CLICKED              : "BU_MISSING_EMPLOYMENT_DETAILS_FINAL_SCREEN_CTA_CLICKED",
    BU_VIEWED_SMART_APP_BANNER                                          : "BU_VIEWED_SMART_APP_BANNER",
    BU_CLICKED_SMART_APP_BANNER_CLOSE                                   : "BU_CLICKED_SMART_APP_BANNER_CLOSE",
    BU_CLICKED_SMART_APP_BANNER_CTA                                     : "BU_CLICKED_SMART_APP_BANNER_CTA",
    BU_VIEWED_DOWNLOAD_PDF_REPORT_PAGE                                  : "BU_VIEWED_DOWNLOAD_PDF_REPORT_PAGE",
    BU_REDIRECT_TO_APP_STORE                                            : "BU_REDIRECT_TO_APP_STORE",
    BU_VIEWED_GET_FREE_CREDIT_REPORT_ON_APP_PAGE                        : "BU_VIEWED_GET_FREE_CREDIT_REPORT_ON_APP_PAGE",
    BU_CLICKED_GET_FREE_CREDIT_REPORT_ON_APP_PAGE                       : "BU_CLICKED_GET_FREE_CREDIT_REPORT_ON_APP_PAGE",
    BU_VIEWED_TOAST_NOTIFICATION_FOR_APP_INSTALL                        : "BU_VIEWED_TOAST_NOTIFICATION_FOR_APP_INSTALL",
    BU_CLICKED_TOAST_NOTIFICATION_FOR_APP_INSTALL                       : "BU_CLICKED_TOAST_NOTIFICATION_FOR_APP_INSTALL",
    BU_VIEWED_DOWNLOAD_APP_POPUP                                        : "BU_VIEWED_DOWNLOAD_APP_POPUP",
    BU_CLICKED_DOWNLOAD_APP_POPUP                                       : "BU_CLICKED_DOWNLOAD_APP_POPUP",
    BU_VIEWED_DOWNLOAD_APP_POPUP_ACQUISITION                            : "BU_VIEWED_DOWNLOAD_APP_POPUP_ACQUISITION",
    BU_CLICKED_DOWNLOAD_APP_POPUP_ACQUISITION                           : "BU_CLICKED_DOWNLOAD_APP_POPUP_ACQUISITION",
    BU_VIEWED_DOWNLOAD_PDF_REPORT_MENU                                  : "BU_VIEWED_DOWNLOAD_PDF_REPORT_MENU",
    BU_CLICKED_DOWNLOAD_PDF_REPORT_MENU                                 : "BU_CLICKED_DOWNLOAD_PDF_REPORT_MENU",
    BU_DOWNLOAD_HEALTH_REPORT_PDF                                       : "BU_DOWNLOAD_HEALTH_REPORT_PDF",
    BU_CLICKED_OFFER_POPUP_WINDOW_CTA_BUTTON                            : "BU_CLICKED_OFFER_POPUP_WINDOW_CTA_BUTTON",
    BU_CAPTURE_API_RESPONSE_OFFER_POPUP_WINDOW                          : "BU_CAPTURE_API_RESPONSE_OFFER_POPUP_WINDOW",
    BU_SCORE_CHANGE_CLICK                                               : 'BU_SCORE_CHANGE_CLICK',
    BU_ADDITIONAL_BUREAU_REFRESH_VIEWED                                 : "BU_ADDITIONAL_BUREAU_REFRESH_VIEWED",
    BU_ADDITIONAL_BUREAU_REFRESH_CLICKED                                : "BU_ADDITIONAL_BUREAU_REFRESH_CLICKED",
    BU_UNSUBSCRIBE_PAGE_VIEWED                                          : "BU_UNSUBSCRIBE_PAGE_VIEWED",
    BU_UNSUBSCRIBE_BUTTON_CLICKED                                       : "BU_UNSUBSCRIBE_BUTTON_CLICKED",
    BU_UNSUBSCRIBE_API_RESPONSE_VIEWED                                  : "BU_UNSUBSCRIBE_API_RESPONSE_VIEWED",
    BU_CREDIT_HEALTH_REPORT_POPUP_VIEWED                                : "BU_CREDIT_HEALTH_REPORT_POPUP_VIEWED",
    BU_CREDIT_HEALTH_REPORT_POPUP_CLICKED                               : "BU_CREDIT_HEALTH_REPORT_POPUP_CLICKED",
    BU_DUPLICATE_PAN_POPUP_VIEWED                                       : "BU_DUPLICATE_PAN_POPUP_VIEWED",
    BU_DUPLICATE_PAN_POPUP_CLICKED                                      : "BU_DUPLICATE_PAN_POPUP_CLICKED",
    BU_DASHBOARD_LUCKY_DRAW_HAMBURGER_MENU_VIEWED                       : 'BU_DASHBOARD_LUCKY_DRAW_HAMBURGER_MENU_VIEWED',
    BU_DASHBOARD_LUCKY_DRAW_HAMBURGER_MENU_CLICKED                      : 'BU_DASHBOARD_LUCKY_DRAW_HAMBURGER_MENU_CLICKED',
    BU_DASHBOARD_LUCKY_DRAW_STICKY_HEADER_VIEWED                        : 'BU_DASHBOARD_LUCKY_DRAW_STICKY_HEADER_VIEWED',
    BU_DASHBOARD_LUCKY_DRAW_STICKY_HEADER_CLICKED                       : 'BU_DASHBOARD_LUCKY_DRAW_STICKY_HEADER_CLICKED',
    BU_DASHBOARD_LUCKY_DRAW_BANNER_VIEWED                               : 'BU_DASHBOARD_LUCKY_DRAW_BANNER_VIEWED',
    BU_DASHBOARD_LUCKY_DRAW_BANNER_CLICKED                              : 'BU_DASHBOARD_LUCKY_DRAW_BANNER_CLICKED',
    BU_DASHBOARD_LUCKY_DRAW_APP_INSTALL_POPUP_VIEWED                    : 'BU_DASHBOARD_LUCKY_DRAW_APP_INSTALL_POPUP_VIEWED',
    BU_DASHBOARD_LUCKY_DRAW_APP_INSTALL_POPUP_CLICKED                   : 'BU_DASHBOARD_LUCKY_DRAW_APP_INSTALL_POPUP_CLICKED',
    BU_DASHBOARD_LUCKY_DRAW_SMART_APP_BANNER_CLICKED                    : 'BU_DASHBOARD_LUCKY_DRAW_SMART_APP_BANNER_CLICKED',
    BU_DASHBOARD_LUCKY_DRAW_SMART_APP_BANNER_VIEWED                     : 'BU_DASHBOARD_LUCKY_DRAW_SMART_APP_BANNER_VIEWED',
    BU_CREDIT_FACTORS_HEALTH_REPORT_TILE_CLICKED                        : 'BU_CREDIT_FACTORS_HEALTH_REPORT_TILE_CLICKED',
    BU_CREDIT_HEALTH_HEADER_ICON_CLICKED                                : 'BU_CREDIT_HEALTH_HEADER_ICON_CLICKED',
    BU_CREDIT_HEALTH_DASHBOARD_VIEWED                                   : 'BU_CREDIT_HEALTH_DASHBOARD_VIEWED',
    BU_CREDIT_HEALTH_DASHBOARD_CLICKED                                  : 'BU_CREDIT_HEALTH_DASHBOARD_CLICKED',
    BU_DASHBOARD_CONGRATULATIONS_POPUP_VIEWED                           : 'BU_DASHBOARD_CONGRATULATIONS_POPUP_VIEWED',
    BU_CREDIT_FACTORS_LUCKY_DRAW_BANNER_VIEWED                          : 'BU_CREDIT_FACTORS_LUCKY_DRAW_BANNER_VIEWED',
    BU_CREDIT_FACTORS_LUCKY_DRAW_BANNER_CLICKED                         : 'BU_CREDIT_FACTORS_LUCKY_DRAW_BANNER_CLICKED',
    BU_STATUS_CRQ_VIEWED                                                : 'BU_STATUS_CRQ_VIEWED',
    BU_STATUS_CRQ_CLICKED                                               : 'BU_STATUS_CRQ_CLICKED',
    BU_STATUS_CRQ_API_RESPONSE                                          : 'BU_STATUS_CRQ_API_RESPONSE',
    BU_DASHBOARD_BUREAU_APPLY_REQUESTED                                 : 'BU_DASHBOARD_BUREAU_APPLY_REQUESTED',
    BU_DASHBOARD_BUREAU_APPLY_API_RESPONSE                              : 'BU_DASHBOARD_BUREAU_APPLY_API_RESPONSE',
    BU_ACQUI_CRQ_VIEWED                                                 : 'BU_ACQUI_CRQ_VIEWED',
    BU_ACQUI_CRQ_CLICKED                                                : 'BU_ACQUI_CRQ_CLICKED',
    BU_ACQUI_CRQ_API_RESPONSE                                           : 'BU_ACQUI_CRQ_API_RESPONSE',
    BU_OFFERS_PAGE_VIEWED                                               : 'BU_OFFERS_PAGE_VIEWED',
    BU_FACTORS_PAGE_OFFERS_VIEWED                                       : 'BU_FACTORS_PAGE_OFFERS_VIEWED',
    BU_CREDIT_PRO_ALERT_VIEWED                                          : 'BU_CREDIT_PRO_ALERT_VIEWED',
    BU_CREDIT_ALERT_VIEWED                                              : 'BU_CREDIT_ALERT_VIEWED',
    BU_CREDIT_ALERT_CLICKED                                             : 'BU_CREDIT_ALERT_CLICKED',
    BU_CREDIT_ALERT_PAGE_CLICKED_HAMBURG                                : 'BU_CREDIT_ALERT_PAGE_CLICKED_HAMBURG',
    BU_CREDIT_ALERT_PAGE_CLICKED_ALERT_ICON                             : 'BU_CREDIT_ALERT_PAGE_CLICKED_ALERT_ICON',
    BU_CREDIT_ALERT_PAGE_CLICKED                                        : 'BU_CREDIT_ALERT_PAGE_CLICKED',
    BU_DUPLICATE_PAN_SECOND_POPUP_VIEWED                                : "BU_DUPLICATE_PAN_SECOND_POPUP_VIEWED",
    BU_DUPLICATE_PAN_SECOND_POPUP_CLICKED                               : "BU_DUPLICATE_PAN_SECOND_POPUP_CLICKED",
    BU_SHORT_AUTH_FORM_ONE_VIEWED                                       : 'BU_SHORT_AUTH_FORM_ONE_VIEWED',
    BU_SHORT_AUTH_FORM_ONE_CLICKED                                      : 'BU_SHORT_AUTH_FORM_ONE_CLICKED',
    BU_SHORT_AUTH_FORM_TWO_VIEWED                                       : 'BU_SHORT_AUTH_FORM_TWO_VIEWED',
    BU_SHORT_AUTH_FORM_TWO_CLICKED                                      : 'BU_SHORT_AUTH_FORM_TWO_CLICKED',
    BU_REPORT_RECEIVED_SHORT_AUTH_FORM_ONE                              : 'BU_REPORT_RECEIVED_SHORT_AUTH_FORM_ONE',
    BU_REPORT_RECEIVED_SHORT_AUTH_FORM_TWO                              : 'BU_REPORT_RECEIVED_SHORT_AUTH_FORM_TWO',
    BU_STATUS_CRQ_SKIP_CLICKED                                          : 'BU_STATUS_CRQ_SKIP_CLICKED',
    BU_DASHBOARD_STATUS_CRQ_VIEWED                                      : 'BU_DASHBOARD_STATUS_CRQ_VIEWED',
    BU_DASHBOARD_STATUS_CRQ_CLICKED                                     : 'BU_DASHBOARD_STATUS_CRQ_CLICKED',
    BU_DASHBOARD_STATUS_CRQ_API_RESPONSE                                : 'BU_DASHBOARD_STATUS_CRQ_API_RESPONSE',
    BU_STATUS_CRQ_RESPONSE                                              : 'BU_STATUS_CRQ_RESPONSE',
    BU_BUSINESS_LOAN_STEP_ONE_POPUP_VIEWED                              : 'BU_BUSINESS_LOAN_STEP_ONE_POPUP_VIEWED',
    BU_BUSINESS_LOAN_STEP_ONE_POPUP_CLICKED                             : 'BU_BUSINESS_LOAN_STEP_ONE_POPUP_CLICKED',
    BU_BUSINESS_LOAN_STEP_TWO_POPUP_VIEWED                              : 'BU_BUSINESS_LOAN_STEP_TWO_POPUP_VIEWED',
    BU_BUSINESS_LOAN_STEP_TWO_POPUP_CLICKED                             : 'BU_BUSINESS_LOAN_STEP_TWO_POPUP_CLICKED',
    BU_CARDS_KNOW_MORE                                                  : 'BU_CARDS_KNOW_MORE',
    BU_PLBT_STEP_ONE_POPUP_VIEWED                                       : 'BU_PLBT_STEP_ONE_POPUP_VIEWED',
    BU_PLBT_STEP_ONE_POPUP_CLICKED                                      : 'BU_PLBT_STEP_ONE_POPUP_CLICKED',
    BU_PLBT_THANK_YOU_POPUP_VIEWED                                      : 'BU_PLBT_THANK_YOU_POPUP_VIEWED',
    BU_PLBT_ERROR_POPUP_VIEWED                                          : 'BU_PLBT_ERROR_POPUP_VIEWED',
    CHANGE_LANGUAGE_CHR                                                 : 'CHANGE_LANGUAGE_CHR',
    BU_FINVU_LOGIN_SCREEN_VIEWED                                        : 'BU_FINVU_LOGIN_SCREEN_VIEWED',
    BU_FINVU_LOGIN_SCREEN_SUBMIT_OTP_CLICKED                            : 'BU_FINVU_LOGIN_SCREEN_SUBMIT_OTP_CLICKED',
    BU_FINVU_IDENTIFY_NEW_OR_EXISTING_USER_VIEWED                       : 'BU_FINVU_IDENTIFY_NEW_OR_EXISTING_USER_VIEWED',
    BU_FINVU_LIST_OF_FIP_VIEWED                                         : 'BU_FINVU_LIST_OF_FIP_VIEWED',
    BU_FINVU_LIST_OF_FIP_CLICKED                                        : 'BU_FINVU_LIST_OF_FIP_CLICKED',
    BU_FINVU_SELECTION_OF_FIP_VIEWED                                    : 'BU_FINVU_SELECTION_OF_FIP_VIEWED',
    BU_FINVU_SELECTION_OF_FIP_CLICKED                                   : 'BU_FINVU_SELECTION_OF_FIP_CLICKED',
    BU_FINVU_ACCOUNT_NOT_FOUND_VIEWED                                   : 'BU_FINVU_ACCOUNT_NOT_FOUND_VIEWED',
    BU_FINVU_ACCOUNT_LINK_OTP_SCREEN_VIEWED                             : 'BU_FINVU_ACCOUNT_LINK_OTP_SCREEN_VIEWED',
    BU_FINVU_ACCOUNT_LINK_OTP_SCREEN_CLICKED                            : 'BU_FINVU_ACCOUNT_LINK_OTP_SCREEN_CLICKED',
    BU_FINVU_CONSENT_PAGE_VIEWED                                        : 'BU_FINVU_CONSENT_PAGE_VIEWED',
    BU_FINVU_CONSENT_PAGE_CLICKED                                       : 'BU_FINVU_CONSENT_PAGE_CLICKED',
    BU_CONSENT_CAPTURE_VIEWED                                           : 'BU_CONSENT_CAPTURE_VIEWED',
    BU_CONSENT_CAPTURE_CLICKED                                          : 'BU_CONSENT_CAPTURE_CLICKED',
    BU_CHR_MULTI_PLAN_VIEWED                                            : 'BU_CHR_MULTI_PLAN_VIEWED',
    BU_CHR_MULTI_PLAN_CLICKED                                           : 'BU_CHR_MULTI_PLAN_CLICKED',
    BU_CHR_MULTI_PLAN_PAY_CLICKED                                       : 'BU_CHR_MULTI_PLAN_PAY_CLICKED',
    BU_APP_DOWNLOAD_SCREEN_VIEWED                                       : 'BU_APP_DOWNLOAD_SCREEN_VIEWED',
    BU_APP_DOWNLOAD_BUTTON_CLICKED                                      : 'BU_APP_DOWNLOAD_BUTTON_CLICKED',
    BU_CREDIT_ADVISOR_CAMPAIGN_VIEWED                                   : 'BU_CREDIT_ADVISOR_CAMPAIGN_VIEWED',
    BU_PAY_CTA_ADVISORY_CLICKED                                         : 'BU_PAY_CTA_ADVISORY_CLICKED',
    BU_CREDIT_RECTIFICATION_CAMPAIGN_VIEWED                             : 'BU_CREDIT_RECTIFICATION_CAMPAIGN_VIEWED',
    BU_PAY_CTA_RECTIFICATION_CLICKED                                    : 'BU_PAY_CTA_RECTIFICATION_CLICKED',
    BU_DASHBOARD_COACH_VIEWED                                           : 'BU_DASHBOARD_COACH_VIEWED',
    BU_DASHBOARD_COACH_CLICKED                                          : 'BU_DASHBOARD_COACH_CLICKED',
    BU_CREDIT_COACH_LANDING_VIEWED                                      : 'BU_CREDIT_COACH_LANDING_VIEWED',
    BU_CREDIT_COACH_LANDING_CLICKED                                     : 'BU_CREDIT_COACH_LANDING_CLICKED',
    CHR_VIDEO_PLAYED                                                    : "CHR_VIDEO_PLAYED",
    CHR_VIDEO_PAUSED                                                    : "CHR_VIDEO_PAUSED",
    RECTIFICATION_VIDEO                                                 : "RECTIFICATION_VIDEO",
    BUREAU_APPLY_AND_REDIRECT_OFFER                                     : "BUREAU_APPLY_AND_REDIRECT_OFFER",
    BUREAU_NON_RR_REAPPLY_VIEWED                                        : "BUREAU_NON_RR_REAPPLY_VIEWED",
    BUREAU_NON_RR_REAPPLY_API_RESPONSE_RECEIVED                         : "BUREAU_NON_RR_REAPPLY_API_RESPONSE_RECEIVED",
    BU_PBGUC_LOGIN_OPENED                                               : "BU_PBGUC_LOGIN_OPENED",
    BU_LOGIN_FROM_PBGUC                                                 : "BU_LOGIN_FROM_PBGUC",
    BU_CHR_GENERATE_PAYMENT_TOKEN_API_RESPONSE_RECEIVED                 : "BU_CHR_GENERATE_PAYMENT_TOKEN_API_RESPONSE_RECEIVED",
     BU_CLICKED_SHOW_ALL_ACCOUNT_CTA                                     : "BU_CLICKED_SHOW_ALL_ACCOUNT_CTA", 
    BU_CLICKED_HIDE_ALL_ACCOUNT_CTA                                     : "BU_CLICKED_HIDE_ALL_ACCOUNT_CTA" 
};      

export const BUREAU_FORM_TYPE   = {     
    CAMPAIGN    : "campaign",
    LOGIN       : "login",
    CIBIL_CREDIT: "cibil-credit",
    EDITTED     : "Edited",
    NOTEDITTED  : "NotEdited",
    SHORT_AUTH  : "ShortAuth",
    USERCOMESVIAPBGUC:"UserComesViaPBGUC"
};

export const BUREAU_REPORT_TYPE = {
    DIRECT_AUTH                 : "Direct Auth",
    RR_AFTER_PRECRQ             : "RR after precrq",
    RR_AFTER_CRQ                : "RR after CRQ",
    RR_AFTER_DOCS_DOCS_UPLOAD   : "RR after docs upload"
};

export const BUREAU_PLATFORM        = 'web';
export const NEW_USER_TYPE_TEXT     = 'new';
export const REVISIT_USER_TYPE_TEXT = "revisit";
export const USER_NOHIT_TEXT        = "noHit";

export const BUREAU_PAGES   = {
    DASHBOARD       : "DASHBOARD",
    NOHIT           : "NOHIT",
    OFFERS          : "OFFERS",
    REPORTCOMPARISON: "REPORTCOMPARISON",
    REPORT_ANALYSIS :  "REPORT_ANALYSIS",
    REFERANDWIN     : "REFERANDWIN",
    FACTORS         : "FACTORS"
};

export const SUBSCRIBER_ID= {
    GA          : 1,
    CLEVERTAP   : 2,
    EVENTHUB    : 3
};

export const UTM_TITLE_FOR_STPL_EARLY_SALARY = 'stpl_earlySalary';
export const UTM_TITLE_FOR_STPL_CACHE        = 'stpl_cache';
export const PAGE_SOURCE_CIBIL               = 'cibil';
export const PAGE_SOURCE_ORGANIC_CIBIL_FORM  = 'cibil_organic';
export const PAGE_SOURCE_CRM_CREDIT_ADVISOR  = 'crm_creditAdvisor';
export const PAGE_SOURCE_GET_LOGGED          = 'get-logged';

export const MY_ACCOUNT_ANALYTICS_EVENTS = {
    MA_DASHB_VIEWED                         : 'MA_DashB_Viewed',
    MA_DASHB_STEPUP_CARD_VIEWED             : 'MA_Dashb_StepUp_Viewed',
    MA_DASHB_MF_PORTFOLIO_DETAILS_CLICKED   : 'MA_DashB_MF_Portfolio_Details_Clicked',
    MA_DASHB_MF_FIELDS_VIEW                 : 'MA_DashB_MF_fields_view',
    MA_DASHB_MF_BANNER_VIEWED               : 'MA_DashB_MF_Banner_viewed',
    MA_DASHB_MF_BANNER_CLICKED              : 'MA_DashB_MF_Banner_clicked',
    MA_DASHB_GOLD_VIEWED                    : 'MA_Dashb_Gold_Viewed',
    MA_DASHB_GOLD_DETAILS_CLICKED           : 'MA_Dashb_Gold_Details_Clicked',
    MA_DASHB_STEPUP_DETAIL_CLICKED          : 'MA_Dashb_StepUp_Details_Clicked',
    MA_DASHB_CS_BANNER_CLICKED              : 'MA_DashB_CS_Banner_clicked',
    MA_DASHB_CS_BANNER_VIEWED               : 'MA_DashB_CS_Banner_viewed',
    MA_DASHB_CS_FIELDS_VIEWED               : 'MA_DashB_CS_Fields_viewed',
    MA_DASHB_CS_DOWNLOAD_REPORT             : 'MA_DashB_CS_Download_report',
    MA_DASHB_CS_VIEW_DETAILS                : 'MA_DashB_CS_View_Details',
    MA_DASHB_PASTAPP_VIEWED                 : 'MA_DashB_PastApp_viewed',
    MA_DASHB_PASTAPP_CLICKED                : 'MA_DashB_PastApp_clicked',
    MA_DASHB_SEARCH_VIEWED                  : 'MA_DashB_Search_viewed',
    MA_DASHB_SEARCH_CONTINUE_JOURNEY        : 'MA_DashB_Search_Continue_Journey',
    MA_DASHB_PASTAPP_REPORT_ISSUE_CLICKED   : 'MA_DashB_PastApp_Report_Issue_Clicked',
    MA_DASHB_PASTAPP_REPORT_ISSUE_SUBMITTED : 'MA_DashB_PastApp_Report_Issue_Submitted',
    MA_DASHB_PASTAPP_REQUEST_CALLBACK       : 'MA_DASHB_PASTAPP_Request_Callback',
    MA_DOC_LOCKER_VIEWED                    : 'MA_Doc_Locker_Viewed',
    MA_DOC_LOCKER_ACTION                    : 'MA_Doc_Locker_Action',
    MA_SUPPORT_TAB                          : 'MA_Support_Tab',
    MA_SUPPORT_ANSWER_VIEWED                : 'MA_Support_answer_viewed',
    MA_SUPPORT_WRITE_TO_US                  : 'MA_Support_write_to_us',
    MA_SUPPORT_MAIL_SENT                    : 'MA_Support_mail_sent',
    MA_MENU_CLICKED                         : 'MA_menu_Clicked',
    LP_REFER_CLICK                          : 'LP_refer_click',
    LP_DASHB_VIEWED                         : 'LP_dashB_Viewed',
    LP_REFER_LINK_GENERATED                 : 'LP_refer_link_generated',
    MA_DASHB_TAX_VIEWED                     : 'MA_DashB_Tax_viewed',
    MA_DASHB_TAX_CLICKED                    : 'MA_DashB_Tax_clicked',
    MA_RECENT_SEARCH_LOADED                 : 'MA_Recent_Search_Loaded',
    MA_MY_APPLICATION_LOADED                : 'MA_My_Application_Loaded',
    MA_MY_CREDIT_SCORE_VIEWED               : 'MA_My_Credit_Score_Viewed',
    MA_MY_STEP_UP_CARD_VIEWED               : 'MA_My_Step_Up_Card_Viewed',
    MA_MY_MUTUAL_FUND_CARD_VIEWED           : 'MA_My_Mutual_Fund_Card_Viewed'
};

export const MYACCOUNT_PLATFORM                         = 'Web';
export const MYACCOUNT_UTM_SOURCE                       = 'MA_MyAccount';
export const UTM_SOURCE  = {
    FACEBOOK : "Facebook"
};
export const UTM_TITLE = {
    BUREAU_CIBIL_PRIVILEGE    : "bureau_cibil_privilege",
    IN_PROGRESS_CRQ           : "inprogress_crq"
};

export const CRM_AGENT             = "crmAgent";
export const CRM_CREDIT_ADVISOR    = "crm_creditAdvisor";

export const BUREAU_MAP_FOR_UTM_TITLE = {};
//BUREAU_MAP_FOR_UTM_TITLE[UTM_TITLE.BUREAU_CIBIL_PRIVILEGE]    = [bureauConstants.BUREAU_CIBIL, bureauConstants.BUREAU_EXPERIAN, bureauConstants.BUREAU_EQUIFAX];

export const UTM_TITLE_AFFILIATE        = "affiliate";
export const BUREAU_XSELL_AFFILIATE     = "BUREAU_XSELL_AFFILIATE";
export const AUTO_LOGIN_THROUGH_SSO     = "sso_auto_login";
export const BUREAU_SHARING_PLATFORM    = {
        WHATSAPP : 'WhatsApp',
        FACEBOOK : 'Facebook',
        GMAIL    : 'Gmail',
        COPYLINK : 'copyLink'
    }

export const REFERRAL_SHARING_DATA = {
    WHATSAPP : {
        URL             : 'https://creditreport.paisabazaar.com/credit-report/apply?utm_source=R&utm_campaign=w',
        TITLE           : `I just checked my credit score on Paisabazaar - So can you! Here's a link to check your *FREE CIBIL Score* and we both get a chance to win many exciting rewards such as MacBook Air, iphone 8, iPad etc. %whatsappShareLink%`,
        TITLE_REWARD    :`Hey! I just checked my Credit Score on Paisabazaar and got my Credit Report worth ₹1200 for FREE - so can you! Here's the link to get your *FREE Credit Report* and we both stand a chance to win exciting rewards worth ₹6 lakhs! - %whatsappShareLink%`
    },
    GMAIL : {
        URL     : 'https://creditreport.paisabazaar.com/credit-report/apply?utm_source=referral&utm_medium=gmail&utm_campaign=web',
        SUBJECT : 'Just got my FREE credit score worth  Rs. 1200 - So can you!',
        BODY    : `Hi there!

Check your FREE Cibil score on Paisabazaar & get these benefits:
- Easy to Understand Credit Report
- Free Monthly score update
- Best offers on loans & cards!
Here's a link to check your FREE CIBIL Score and we both get a chance to win many exciting rewards such as MacBook Air, iphone 8, iPad etc.
Check Now - %gmailShareLink%

Thanks!`
    },
    FACEBOOK : {
        URL             : 'https://creditreport.paisabazaar.com/credit-report/apply?utm_source=referral&utm_medium=fb&utm_campaign=web',
        OG_IMAGE        : `${SITE_URL}/images/credi_score_shareable.jpg`,
        OG_TITLE        : 'Check your free credit score on Paisabazaar to win gadget worth ₹6 Lakh',
        OG_DESCRIPTION  : `Check your FREE Cibil score on Paisabazaar & get these benefits:
- Easy to Understand Credit Report
- Free Monthly score update
- Best offers on loans & cards
%fbShareLink%
Check your score through my referral link so that both of us get a chance to win many exciting rewards such as MacBook Air, iphone 8, iPad etc.`
    }
};
export const SAMSUNG_PAY                        = "samsung_pay";
export const SAMSUNG_PAY_CALLBACK               = "http://samsung.com/?product=bureau&applicationId=na&status=SUCCESS";
export const UTM_CONTENT_ACTIVATE_INSIGHTS      = 'pdf_parser';
export const PDF_PARSER_PURPOSE_LIST = {}
PDF_PARSER_PURPOSE_LIST[bureauConstants.BUREAU_EXPERIAN] = "EXPERIAN_CREDIT_REPORT";
PDF_PARSER_PURPOSE_LIST[bureauConstants.BUREAU_CIBIL]    = "CIBIL_CREDIT_REPORT";
PDF_PARSER_PURPOSE_LIST[bureauConstants.BUREAU_HIGHMARK] = "HIGHMARK_CREDIT_REPORT";
export const CREDIT_ASSIST_LOW_SCORE_CTA        = 'Improve your Credit Score';
export const CREDIT_ASSIST_HIGH_SCORE_CTA       = 'Manage your Credit Score';
export const CREDIT_ASSIST_NOHIT_CTA            = 'Build your Credit Score';
export const insuranceMarqueeSegmentList = [
    "BUREAU_TERM_INSURANCE_MAX",
    "BUREAU_TERM_INSURANCE_MAX_NOHIT",
    "BUREAU_TERM_INSURANCE_POLICY",
    "BUREAU_TERM_INSURANCE_POLICY_NOHIT"
    ];
export const BUREAU_APPLICATION_SHORT_AUTH_APPLY_API = '/api/v1/bureauApplication/applyShortAuth';
export const UTM_SOURCE_PB_REWARD = 'pb_rewards';

export const MUTUAL_FUND_SUB_PRODUCT_TYPES = [
    'MF',
    'MUTUALFUNDPREMIUM',
    'MUTUALFUNDPREMIUMNOHIT'
];
export const CREDIT_ADVISOR_PRODUCT = '33';

export const ENCRYPTION_KEY         = "6YMOPJ22NFZP90OU";
export const ENCRYPTION_IV          = "VMJDV0BE032X22WU";
export const BRANCH_IO_KEY          = ENV_CONFIG.BRANCH_IO_KEY;
export const VOUCHER_CODE           = ENV_CONFIG.VOUCHER_CODE;
export const BRANCH_DESKTOP_URL     = ENV_CONFIG.BRANCH_DESKTOP_URL;
export const BRANCH_ANDROID_URL     = ENV_CONFIG.BRANCH_ANDROID_URL;
export const BRANCH_IOS_URL         = ENV_CONFIG.BRANCH_IOS_URL;
export const REWARD_BALANCE_PRODUCT_MAPPING = {
    PAISABAZAAR_GOLD : {
        CLAIM_URL   : ENV_CONFIG.PAISABAZAAR_DIGITAL_GOLD_URL,
        TITLE       : 'PB Gold Balance'
    }
}
// constants list for pixel tracking starts -----
export const V_COMMISSION                   = 'vCommission';
export const VALUE_LEAF                     = 'valueLeaf';
export const DGTG_ALLMARKETING              = 'allMarketing';
export const MEDIA_ZOTIC                    = 'mediaZotic';
export const ADCOUNTY_MEDIA                 = 'adCounty';
export const INTELLECTADS                   = 'intellectads';
export const OPICLE                         = 'opicle';
export const VERMMILLIONE                   = 'Vermmillione';
export const SHIVTEL                        = 'shivtel';
export const FACEBOOk_VALUE_LEAF_UTM_SOURCE = 'facebookvalueleaf';
export const FACEBOOK_UTM_SOURCE            = 'facebook'
export const TABOOLA_UTM_SOURCE             = 'taboola';
export const AFFLE_UTM_SOURCE               = 'affle';
export const ADMITAD                        = 'admitad';

export const UTM_AFFILIATE_MAP = {
    adcanopus           :'ADCANOPUS',
    adcounty            :'ADCOUNTY_MEDIA',
    adsplay             :'ADSPLAY',
    intellectads        :'INTELLECTADS',
    intellectadssf      :'INTELLECTADSSF',
    opicle              :'OPICLE',
    opiclesf            :'OPICLE',
    rationalheads       :'RATIONALHEADS',
    valueleaf           :'VALUE_LEAF',
    vcommission         :'V_COMMISSION',
    affel               :'AFFLE',
    gtsms9              : 'GTECH',
    prudigital          : 'PRUDIGITAL',
    admitad             : 'ADMITAD'
}

export const AFFILIATE_PIXELS = {
    V_COMMISSION : {
        'type' : 'img',
        'src'  : 'https://tracking.vcommission.com/SLEK1?adv_sub=CUSTOMER_ID'
    },
    VALUE_LEAF : {
        'type' : 'img',
        'src'  : 'https://tracking.salesleaf.com/aff_l?offer_id=1753&adv_sub=CUSTOMER_ID'
    },
    DGTG_ALLMARKETING : {
        'type' : 'iframe',
        'src'  : 'https://allmarketing.go2cloud.org/aff_l?offer_id=1588&adv_sub=CUSTOMER_ID'
    },
    MEDIA_ZOTIC : {
        'type' : 'img',
        'src'  : 'https://www.mediazotic.com/track/conversion.php?id=1072&transaction_id=CUSTOMER_ID'
    },
    ADCOUNTY_MEDIA : {
        'type' : 'img',
        'src'  : 'https://ttrk.ringocount.com/pixel?adid=5c35e85cb6920d7c85125257&txn_id=CUSTOMER_ID'
    },
    INTELLECTADSSF : {
        'type' : 'img',
        'src'  : 'https://www.intellectadz.com/track/conversion.asp?cid=1579&conversionType=1&key=CUSTOMER_ID&opt1=&opt2=&opt3='
    },
    OPICLE  : {
        'type' : 'img',
        'src'  : 'https://opicle360.com/p.ashx?o=98&e=64&f=img&udid=CUSTOMER_ID'
    },
    VERMMILLIONE : {
        'type' : 'img',
        'src'  : 'https://vecomm.vnative.net/pixel?adid=5cd3aecbb6920d69aa693145&txn_id=CUSTOMER_ID'
    },
    ADSPLAY : {
        'type' : 'img',
        'src'  : 'https://affiliates.adsplay.in/trackingcode_lead_condi.php?pgmid=281977&orderId=CUSTOMER_ID'
    },
    RATIONALHEADS : {
        'type' : 'img',
        'src'  : 'https://partner.cpiperform.co.in/pixel?adid=5d428480b6920d472c77a3d5&txn_id=CUSTOMER_ID'
    },
    ADCANOPUS : {
        'type' : 'img',
        'src'  : 'https://adcanopus.go2cloud.org/aff_l?offer_id=35272&adv_sub=CUSTOMER_ID'
    },
    AQUGEN : {
        'type' : 'img',
        'src'  : 'https://aqugen.go2cloud.org/aff_l?offer_id=1270&adv_sub=CUSTOMER_ID'
    },
    HOOADS : {
        'type' : 'img',
        'src'  : 'https://elevemedia.go2cloud.org/aff_l?offer_id=1256&adv_sub=CUSTOMER_ID'
    },
    TYROO : {
        'type' : 'img',
        'src'  : 'https://tyroo.g2afse.com/success.jpg'
    },
    ICUBES : {
        'type' : 'img',
        'src'  : 'https://tracking.icubeswire.co/aff_a?offer_id=345&adv_sub1=CUSTOMER_ID&adv_sub2=CUSTOMER_ID',
        'id'   : 'pixelcodeurl'
    },
    HOOMEDIA : {
        'type' : 'img',
        'src'  : 'https://theballyhoomedia.go2cloud.org/aff_l?offer_id=150' 
    },
    APOXYMEDIA : {
        'type' : 'img',
        'src'  : 'https://apoxymedia.net/p.ashx?o=686&e=215&f=img&t=CUSTOMER_ID' 
    },
    CONVIVIAL : {
        'type' : 'img',
        'src'  : 'https://app.trackurearn.xyz/pixel?adid=5d6ceaebb6920d7fb70ae7dd' 
    },
    AFFLE : {
        'type' : 'img',
        'src'  : 'https://o5o4o6.com/p.ashx?o=126527&e=5480&f=img&t=CUSTOMER_ID' 
    },
    SHIVTEL_VAR : { // add variable before embedding the script
        'type' : 'script',
        'src'  : null,
        'html' : 'var ClickMeter_pixel_url = "//pixel.watch/xtaz"'
    },
    SHIVTEL_SCRIPT : { // embed the script
        'type' : 'script',
        'src'  : '//s3.amazonaws.com/scripts-clickmeter-com/js/pixelNew.js',
        'id'   : 'cmpixelscript'
    },
    SHIVTEL_IMAGE : { // embed image pixel
        'type' : 'img',
        'src'  : '//pixel.watch/k458'
    },
    GTECH      : {
        'type' : 'iframe',
        'src'  : 'https://g.gotrackier.com/pixel?adid=5d6f5169b6920d5b1c107925&txn_id=CUSTOMER_ID'
    },
    INTELLECTADS: {
        'type' : 'img',
        'src'  : 'https://www.intellectads.co.in/track/conversion.asp?cid=1499&conversionType=1&key=CUSTOMER_ID&opt1=&opt2=&opt3='
    },
    PRUDIGITAL : {
        'type'  : 'img',
        'src'   : 'https://prudigital99.gotrackier.com/pixel?adid=6088f1218cee1e39cd2ab025'
    },
    ADMITAD : {
        'type'  : 'img',
        'src'   : 'https://ad.admitad.com/r?campaign_code=87f54b38af&action_code=1&uid=CUSTOMER_ID&order_id=CUSTOMER_ID&tariff_code=1&payment_type=lead'
    }
}

// constant list for pixel tracking ends -----

export const LOYALTY_BANNER = {
    CONTENT             : "Referrer is a person who is an exciting customer of Paisabazaar,Referee is a person who is Introduced by the referrer.\n\n When referee gets their credit report with us, the referrer becomes eligible for the contest.100 Winners will be chosen randomly from all eligible referrers of the current month.\n\nThe referee has to be a new applicant and should generate his credit report through the referral link shared. Only then will the referrer be part of this contest.\n\nFor all other queries please email creditreport@paisabazaar.com\n\nPaisabazaar reserves all rights to change the amounts conferred under Refer & Win program at any point in time.\n\nPaisabazaar employees and families are not eligible for these rewards.\n\nPaisabazaar reserves the rights to amend these terms and conditions at any time without any Prior notice. Modifications of these terms will be effective from the time they are updated in the Terms & Conditions Section.",
    GOLD_REFER_MESSAGE  : " Refer your friends to get their <b>FREE Credit Report</b> & get a chance to <b>win a Macbook Air, iPhone 8, iPad, MI LED Smart TV</b> & more."  
      
}

// constant list for pixel tracking ends -----

export const CREDIT_ASSIST_SMS_EVENT_LIST = [
            {label : "Send Payment SMS",    value : ""}, 
            {label : "Share Payment Link",  value : "CREDIT_ASSIST_INCREASE_YOUR_SCORE"},
            {label : "Add On Call Pack",    value : "CREDIT_ASSIST_INCREASE_YOUR_SCORE_WITH_ADDON"},
            {label : "Only Add On Call", value : "CREDIT_ASSIST_INCREASE_YOUR_SCORE_WITH_ONLY_ADDON"},
            {label : "Rectification: Negative Account", value : "CREDIT_RECTIFICATION_REMOVE_NEGATIVE_ACCOUNT"},
            {label : "Step Up Card Advisory", value : "STEPUPCARD_ADVISORY"},
            {label : "Rectification: Enable discount", value : "ENABLE_DISCOUNT"},
            {label : "Send link for CHR", value : "CHR_CRM_CJ_SMS"}];
        
export const CREDIT_ASSIST_EVENT_LOGIN_URL = {
    "CREDIT_ASSIST_INCREASE_YOUR_SCORE"                 : "https://tinyurl.com/y37podfz",
    "CREDIT_ASSIST_INCREASE_YOUR_SCORE_WITH_ADDON"      : "https://tinyurl.com/y2g6yrto",
    "CREDIT_ASSIST_INCREASE_YOUR_SCORE_WITH_ONLY_ADDON" : "https://tinyurl.com/y5jbcdev",
    "STEPUPCARD_ADVISORY"                               : "https://paisabazaarapp.onelink.me/qcrE/advisory",
    "CHR_CRM_CJ_SMS"                                    : "https://paisabazaarapp.onelink.me/qcrE/e3a5d15f"
};

export const CREDIT_ASSIST_LANDING_PAGE_LEAD_CREATION_SCORE_CUTOFF = {
    "EXPERIAN"  :   {"MIN" : 700,   "MAX" : 725},
    "CIBIL"     :   {"MIN" : 700,   "MAX" : 725},
    "EQUIFAX"   :   {"MIN" : 0,     "MAX" : 650},
    "HIGHMARK"  :   {"MIN" : 0,     "MAX" : 725}
}

export const CREDIT_ASSIST_PAYMENT_PLAN = {
    "BASIC_PLAN"                                : "Basic_Plan",
    "BASIC_PLAN_WITH_ADDITIONAL_CALL"           : "Basic_Plan_With_Additional_Call",
    "ADD_ON_ONLY_PLAN"                          : "Add_On_Only_Plan",
    "BASIC_PLAN_WITH_TAX"                       : "Basic_Plan_With_Tax",
    "BASIC_PLAN_WITH_ADDITIONAL_CALL_WITH_TAX"  : "Basic_Plan_With_Additional_Call_With_Tax",
    "ADD_ON_ONLY_PLAN_WITH_TAX"                 : "Add_On_Only_Plan_With_Tax"
}

export const CREDIT_ASSIST_PLAN_FULL_PAYMENT_LIST       = ["Basic_Plan_With_Additional_Call", "Add_On_Only_Plan","Basic_Plan_With_Additional_Call_With_Tax", "Add_On_Only_Plan_With_Tax", "Silver", "Gold", "Platinum_Plus"];
export const CREDIT_ASSIST_BASIC_PLAN_PAYMENT_LIST      = ["Basic_Plan","Basic_Plan_With_Tax" ];
export const CREDIT_ASSIST_ADD_ON_PLAN_PAYMENT_LIST     = ["Add_On_Only_Plan","Add_On_Only_Plan_With_Tax" ];
export const SHOW_WHATSAPP_CONSENT_ON_LOGIN = true;
export const MONTH_LIST = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
export const BANK_LOGO_IMAGE_MAP = {
    SBI_CARDS:'sbi.svg',
    KOTAK_BANK:'kotak.svg',
    IDFC_FIRST:'idfc.gif',
    BAJAJ_FINSERV:'bajaj.svg',
    ICICI_BANK:'icici.svg',
    HDFC_BANK:'hdfc.svg'
}

export const SHOW_OLD_COLLECTION                        = false
export const SHOW_WALLET_ON_SCORE_PLUS_PAYMENT_OPTIONS  = false
export const APP_ANDROID                                = "app_android";
export const SWIGGY_SOURCE                              = "swiggy";
export const PROFILE_SEMIMASK_FIELD_LIST                = ["pan", "mobileNumber"];
export const PRODUCTS = {
    CREDIT_PLUS : 'credit-plus'
}

export const REWARD_BALANCE_URL_MYACCOUNT = {
    PAISABAZAAR_GOLD : {
        CLAIM_URL   : ENV_CONFIG.MY_ACCOUNT.DIGITAL_GOLD_DASHBOARD,
        TITLE       : 'PB Gold Balance'
    }
}
export const PRODUCT_TYPE_MAP = {
    COLLECTIONS : {
        ID      : "40",
        NAME    : "COLLECTIONS"
    }
}

export const PAYMENT_MODES = {
    'NETBANKING'    : 'Netbanking',
    'UPI'           : 'UPI',
    'BILLDESK'      : 'Billdesk',
    'NEFT'          : 'NEFT',
    'IMPS'          : 'IMPS',
    'RTGS'          : 'RTGS',
    'DEMAND_DRAFT'  : 'Demand Draft',
    'CHEQUE'        : 'Cheque',
    'CASH_AT_BRANCH': 'Cash at Branch',
    'PAYTM'         : 'Paytm'
}

export const PAYMENT_BANKS = {
    1 :'HDFC_BANK',
    2 :'ICICI_BANK',
    3 :'SBI_CARDS',
    4 :'AXIS_BANK',
    5 :'KOTAK_BANK',
    6 :'IDFC_FIRST',
    7 :'INDUSIND_BANK',
    8 :'YES_BANK',
    9 :'RBL_BANK',
    10 :'PAYTM',
    11 :'GOOGLE_PAY',
    12 :'PHONEPE',
    13 :'OTHER_BANKS'
}

export const PTP_AGENT_EMI_OPTIONS = [
    {
        value: 2,
        label: 'Pay in 2 EMIs'
    },
    {
        value: 3,
        label: 'Pay in 3 EMIs'
    },
    {
        value: 4,
        label: 'Pay in 4 EMIs'
    },
    {
        value: 5,
        label: 'Pay in 5 EMIs'
    },
    {
        value: 6,
        label: 'Pay in 6 EMIs'
    },
    {
        value: 7,
        label: 'Pay in 7 EMIs'
    },
    {
        value: 8,
        label: 'Pay in 8 EMIs'
    },
    {
        value: 9,
        label: 'Pay in 9 EMIs'
    }
]
export const PTP_CUSTOMER_EMI_OPTIONS = [
    {
        value: 2,
        label: 'Pay in 2 EMIs'
    },
    {
        value: 3,
        label: 'Pay in 3 EMIs'
    },
    {
        value: 4,
        label: 'Pay in 4 EMIs'
    },
    {
        value: 5,
        label: 'Pay in 5 EMIs'
    },
    {
        value: 6,
        label: 'Pay in 6 EMIs'
    }
]

export const PTP_AGENT_ACCOUNT_STATUS_OPTIONS = [
    {
        value: 1,
        label: 'CLOSURE'
    },
    {
        value: 2,
        label: 'SETTLEMENT'
    },
    {
        value: 3,
        label: 'NO CHANGE'
    }
]

export const COLLECTION_PAYMENT_PLAN = {
    "FULL"      : 1, 
    "EMI"       : 2, 
    "PARTIAL"   : 3
}
export const CAMPAIGN_PAGE_SMS = {
    "CREDIT_ASSIST_INCREASE_YOUR_SCORE"             : "CREDIT_ASSIST",
    "CREDIT_RECTIFICATION_REMOVE_NEGATIVE_ACCOUNT"  : "CREDIT_RECTIFICATION"
};

export const SHOW_TECHNICAL_GLITCH_ERROR = false
export const CREDIT_PLUS_BRANDING_FOR_ADVISORY_ON_DASHBOARD = true
export const SHOW_NEFT_CHEQUE_ON_SCORE_PLUS_PAYMENT_OPTIONS = ENV_CONFIG.SHOW_NEFT_CHEQUE_ON_SCORE_PLUS_PAYMENT_OPTIONS
export const REDUX_STORE_KEY = 'persist:root'
export const ERROR_API_KEY   = 'errorLoginTypeAPICalled'

export const NOT_SUPPORTED_MULTI_LANGUAGE = [
    '/credit-report/credit-rectification-campaign',
    '/credit-report/credit-assist-campaign',
    '/campaign/apply'
];

export const MENU_ADVISORY_CHECK_FLAG      = 1
export const MENU_RECTIFICATION_CHECK_FLAG = 2

export const SURFACE_CREDIT_PLUS = {
    BUREAU_DASHBOARD_SURFACE            : 'BUREAU_DASHBOARD_SURFACE',
    BUREAU_ACCOUNT_SURFACE              : 'BUREAU_ACCOUNT_SURFACE',
    BUREAU_DASHBOARD_ADVISORY           : 'BUREAU_DASHBOARD_ADVISORY',
    BUREAU_DASHBOARD_RECTIFICATION      : 'BUREAU_DASHBOARD_RECTIFICATION',
    paymentHistory                      : 'paymentHistory',
    cardUtilization                     : 'cardUtilization',
    creditHistory                       : 'creditHistory',
    numberOfAccount                     : 'numberOfAccount',
    accountDetails                      : 'accountDetails',
    creditEnquiries                     : 'creditEnquiries'
}

export const GA_EVENT_LABEL = {
    VIEWED: 'viewed',
    PAY_NOW: 'payNow',
    PLAN_UPDATE: 'planUpdate',
    PLAN_SELECT: 'planSelect',
    SMS_SEND: 'smsSend'
};

export const CREDIT_ASSIST_SUBSCRIPTION_BASIC_PLAN = {
    SILVER            : 'Silver',
    GOLD              : 'Gold',
    PLATINUM_PLUS     : 'Platinum_Plus'
};

export const CREDIT_ASSIST_SUBSCRIPTION_ADDON_PLAN = {
    SCORE_IMPROVEMENT_REPORT        : 'Score_Improvement_Report',
    CREDIT_REPORT_ADDITIONAL_CALL   : 'Credit_Report_Additional_Call'
};

export const CREDIT_PLUS_TAB_OPTIONS = {
    YOUR_PLAN       : "YOUR_PLAN",
    UPGRADE_PLAN    : "UPGRADE_PLAN",
    REPORTS         : "REPORTS"
};

export const CREDIT_ASSIST_SUBSCRIPTION_BASIC_PLAN_IMAGE_URL = {
    SILVER            : "../images/silver.png",
    GOLD              : "../images/gold_v2.png",
    PLATINUM_PLUS     : "../images/platinum_plus.png"
};

export const CREDIT_ASSIST_SUBSCRIPTION_BASIC_PLAN_VALIDITY_IN_MONTHS = {
    SILVER            : "1",
    GOLD              : "3",
    PLATINUM_PLUS     : "6"
};

export const CREDIT_ASSIST_SUBSCRIPTION_BASIC_PLAN_DISPLAY_NAME = {
    'Silver'        : "SILVER",
    'Gold'          : "GOLD",
    'Platinum_Plus' : "PLATINUM+"
};

export const SHOW_REFERRAL              = ENV_CONFIG.SHOW_REFERRAL;

export const BUREAU_API_STATUS  =  {
    CUSTOMER_PROFILE_NOT_FOUND: "CUSTOMER_PROFILE_NOT_FOUND",
    USER_NOT_FOUND            : "USER_NOT_FOUND"
};

export const CAMPAIGN_UTM_SOURCE = 'prospref';

export const CAMPAIGN_DETAILS_MAPPING = {
    GENDER_ID       : 'genderId',
    DOB             : 'dob',
    PIN_CODE        : 'pincode',
    EMAIL_ID        : 'emailId',
    MOBILE_NUMBER   : 'mobileNumber'
};

export const MY_ACCOUNT_PUCKAR_CONTRACT_ID = ENV_CONFIG.MY_ACCOUNT_PUCKAR_CONTRACT_ID;

export const DEFAULT = 'default';

export const PL_CASHBACK_OFFER_STATUS           = ENV_CONFIG.PL_CASHBACK_OFFER_STATUS;

export const CC_CASHBACK_OFFER_STATUS           = ENV_CONFIG.CC_CASHBACK_OFFER_STATUS;

// CREDIT HEALTH PLAN NAMES
export const CREDIT_HEALTH_PLAN                 = 'CREDIT_HEALTH_PREMIUM_WITH_GST';
export const CREDIT_HEALTH_ADDON_PLAN           = 'CREDIT_HEALTH_EXPERT_SESSION_ADD_ON';
export const CREDIT_HEALTH_PLUS_ADDON_PLAN      = 'CREDIT_HEALTH_WITH_ADD_ON_EXPERT_SESSION';
export const EXPERT_SESSION_ADDON               = ["CREDIT_HEALTH_RENEWALS_WITH_EXPERT_SESSION", "CREDIT_HEALTH_EXPERT_SESSION_ADD_ON", "CREDIT_HEALTH_WITH_ADD_ON_EXPERT_SESSION", "Credit_Health_Subscription_Premium_Plan", "Credit_Health_Subscription_Basic_Plan_Expert_Call", "Credit_Health_Subscription_Standard_Plan_Expert_Call"];
// STATUS MSG
export const SUCCESS                            = 'SUCCESS'

export const DIRECT = 'direct'
export const CREDIT_PRO_SUPPORT_NUMBER          = '1800 208 8877';

export const IS_NEW_BL_POST_CLICK_JOURNEY_ENABLE        = ENV_CONFIG.IS_NEW_BL_POST_CLICK_JOURNEY_ENABLE;

export const ENABLE_CC_PCO_MORE_DETAIL                  = ENV_CONFIG.ENABLE_CC_PCO_MORE_DETAIL;

export const EMPOYMENT_TYPE_DATA                        = [{ employment: 'Salaried', key: '1' }, { employment: 'Self Employed Business', key: '2' }, { employment: 'Self Employed Professional', key: '3' }]

export const ENABLE_QUOTE_APPLY_EXACT_MATCH_SEGMENT_LIST = ["SC_SBM_STEPUP", "PL_IDFCBANK_LINE"];

export const ENABLE_QUOTE_APPLY_REGEX_SEGMENT           = "CC_RBL_";

export const FINVU_FILE_PATH                            = ENV_CONFIG.FINVU_FILE_PATH;

export const OVI_PLATEFORM_URL                          = ENV_CONFIG.OVI_PLATEFORM_URL;

export const CONSENT_DATA_BY_SOURCE                     = ENV_CONFIG.CONSENT_DATA_BY_SOURCE;

export const AGGREGATOR_NAME                            = 'FINVU';

export const FINVU_BANK_ID_MAPPING  = utility.checkUrl() ? CreditSavingsConstants.FINVU_BANK_ID_MAPPING_DEV : CreditSavingsConstants.FINVU_BANK_ID_MAPPING_PROD

export const FINVU_STATE_ID = ['AA_LOGIN', 'ACCOUNT_CHECKED_NOT_DISCOVERED', 'ACCOUNT_DISCOVERED', 'ACCOUNT_LINKED', 'CONSENT_ALREADY_GIVEN', 'CONSENT_GIVEN', 'NO_USER_STATE_PRESENT']

export const MONTH_SHORT_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const COUNT_OF_GET_USER_ACCOUNTS_CALL = 3

export const TIME_FOR_NEXT_GET_USER_ACCOUNTS_API_CALL = 20000

export const TIME_FOR_NEXT_GET_USER_ACCOUNTS_API_CALL_TO_UPDATE_ACCOUNTS = [20000, 20000, 20000, 60000, 180000]

export const TIME_TO_FETCH_ACCOUNTS_AFTER_REFRESH = 20000

export const MOBILE_APP_DOWNLOAD_BANNER_ON_APPLY_POC = ENV_CONFIG.MOBILE_APP_DOWNLOAD_BANNER_ON_APPLY_POC

export const PAISA_HOME = ENV_CONFIG.PAISA_HOME

export const BANK_LOGO    = {
    "HDFC_BANK"  : "../images/bank_logos/hdfc.png",
    "SBI_BANK"   : "../images/bank_logos/sbi.png",
    "ICICI_BANK"  : "../images/bank_logos/icici.png",
    "OTHER"       : "../images/bank_logos/bank.png"
}

export const FINVU_CIBIL_SCORE_CUT_OFF = ENV_CONFIG.FINVU_CIBIL_SCORE_CUT_OFF

export const BANK_ID_TO_NOT_SHOW_IN_FINVU = ["KotakMahindraBank-FIP", "FDRLFIPPROD", "IDFCFirstBank-FIP", "AUBank-FIP"]

export const RENDER_LIMITED_BANKS_IN_FINVU = false

export const IS_REAPPLY_BUREAU_ENABLED = ENV_CONFIG.IS_REAPPLY_BUREAU_ENABLED

export const BUREAU_STATUS_FOR_NOT_UPDATED_DATA = ['FAILED', 'RE_APPLY_PENDING']

// export const TOP_BANKS_FINVU_BANK_ID = ["HDFC-FIP", "ICICI-FIP", "AXIS001", "KotakMahindraBank-FIP"]
export const TOP_BANKS_FINVU_BANK_ID = ["BARB0KIMXXX", "HDFC-FIP", "ICICI-FIP", "AXIS001", "KotakMahindraBank-FIP"]

export const ACCOUNT_AGGREGATOR_TERMS_OF_USE_ROUTE = "account-aggregator-terms-of-use";

export const PRODUCT_TYPE = {
    CREDIT_HEALTH               : 'CREDIT_HEALTH',
    CREDIT_ASSIST               : 'CREDIT_ASSIST',
    CREDIT_RECTIFICATION        : 'CREDIT_RECTIFICATION',
    FINVU_DASHBOARD             : 'finvudashboard'
};

export const FINVU_APP_SOURCE = "mobile_app"

export const FINVU_TERMS_LINK = "https://finvu.in/terms"

export const SIX_MONTHS_SCORE_TREND_CHECK = 180;