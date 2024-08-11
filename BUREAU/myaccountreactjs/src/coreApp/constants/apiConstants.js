export const GET_BUREAU_SCORE           = ""
export const CRM_AGENT                  = "crmAgent";
export const MOCK_DATA                  = true;

export const ENV                        = "development";

export const BASE_URL_INTERNAL          = `${ENV === "development" ? "https://staging-api-internal.paisabazaar.com" : ""} `;
export const BASE_URL_EXTERNAL          = `${ENV === "development" ? "https://staging-api-external.paisabazaar.com" : ""} `;
export const BASE_URL_BSP               = `${ENV === "development" ? "https://staging-api2.paisabazaar.com" : ""} `;

export const GET_STATE                  = `${BASE_URL_EXTERNAL}/OVI/api/v1/consent/state/getState`;
export const FETCH_USER_ACCOUNT         = `${BASE_URL_EXTERNAL}/OVI/api/v1/FI/fetchUserAccountInfo`;

export const CHECK_PUCKAR               = `${BASE_URL_INTERNAL}/MSP/api/v1/puckar/check`;
export const GET_LEADS                  = `${BASE_URL_INTERNAL}/MSP/api/v1/myAccount/getLeads`;
export const GET_STEP_UP_CARD_DETAILS   = `${BASE_URL_INTERNAL}/MSP/api/v1/myAccount/getStepUpCardDetails`;
export const GET_TRANSACTIONSS          = `${BASE_URL_INTERNAL}/MSP/api/v1/myAccount/transactionss`;
export const GET_PBGUC                  = `${BASE_URL_INTERNAL}/MSP/api/v1/pbguc/event/produce`;

export const GET_OFFERS                 = `${BASE_URL_BSP}/BSP/api/v2/offer/getOffers`;
export const GET_BUREAU                 = `${BASE_URL_BSP}/BSP/api/v1/bureauApplication/reportStatus`;