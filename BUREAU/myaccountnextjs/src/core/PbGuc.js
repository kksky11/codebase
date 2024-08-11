/* import library */
import PaisabazaarGuc from '@paisabazaar/guc';

/* import constants */
import { MP_WEB, MP_MOBILE, SITE_ID_PB_GUC, PAISABAZAAR_URL } from "@constants";

export class PbGuc {

    constructor() {
        if (PbGuc.instance instanceof PbGuc) {
            return PbGuc.instance;
        }
        this.pbgucsetting = {
            'pbgucObj': this.initiatePBGUC(),
            'version': Math.floor(Math.random() * 4000)
        };
        PbGuc.instance = this;
    }

    /**
     * 
     * @returns return's the static utm_source
     */
    getStaticUtmSource = () => {
        return (isSSRMobile) ? MP_MOBILE : MP_WEB;
    }

    /**
    * used to initiate the PBGUC library
    */
    initiatePBGUC = () => {
        let utmData = {
            "browser": navigator.userAgent,
            "clientId": null,
            "completeUrl": window.location.href,
            "createdAt": new Date(),
            "dataSource": "",
            "dataSourceId": null,
            "deviceId": "1",
            "deviceType": "NULL",
            "gclid": null,
            "host": PAISABAZAAR_URL,
            "hostId": "1",
            "httpReferrer": null,
            "isBot": false,
            "parentVisitId": null,
            "pbReferer": null,
            "pbUtmCampaign": null,
            "pbUtmCampaignId": null,
            "pbUtmContent": null,
            "pbUtmContentId": null,
            "pbUtmMedium": null,
            "pbUtmMediumId": null,
            "pbUtmSource": null,
            "pbUtmSourceId": null,
            "pbUtmTerm": null,
            "pbUtmTermId": null,
            "productUrl": window.location.href,
            "remoteAddress": '',
            "sessionId": "",
            "userCookie": null,
            "utm": "",
            "utmContent": "",
            "utmContentId": null,
            "utmId": null,
            "utmMedium": null,
            "utmMediumId": null,
            "utmName": "",
            "utmNameId": null,
            "utmSource": null,
            "utmSourceId": null,
            "utmTerm": null,
            "utmTermId": null,
            "utmTitle": null,
            "utmTitleId": null
        }
        return new PaisabazaarGuc({
            siteId: SITE_ID_PB_GUC,
            environment: process.env.NEXT_PUBLIC_ENV == 'development' ? 'staging' : process.env.NEXT_PUBLIC_ENV,
            utmData: utmData
        })
    }

    /**
    * 
    * @param {string} partnerId 
    * @returns image url for the specific partner
    */
    getPartnerLogoForPBGUC = (partnerId) => {
        return `${process.env.NEXT_PUBLIC_HOST_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/images/en/bankQuotesLogos/${partnerId}.png`;
    };

    /**
     * 
     * @param {string} leadId 
     * @returns cj link
     */
    getCJDomain = (leadId) => {
        return `${process.env.NEXT_PUBLIC_HOST_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/?leadId=${leadId}`;
    }

    /**
    * used to set the data for PBGUC
    * @param {object} data 
    */
    setDataPBGUC = (data) => {
        return Promise.resolve().then(async () => {
            return await this.pbgucsetting.pbgucObj.setData(data);
        });
    }

    /**
     * used to update the application data
     * @param {string} leadId 
     * @param {object} data 
     * @returns 
     */
    setApplicationDataPBGUC = (leadId, data) => {
        return Promise.resolve().then(async () => {
            return await this.pbgucsetting.pbgucObj.setApplication(leadId, data);
        });
    }

    /**
    * used to get the visitId from cookie
    */
    getVisitIdPBGUC = () => {
        return Promise.resolve().then(async () => {
            return await this.pbgucsetting.pbgucObj.getVisit();
        });
    }

    /**
    * used to get the data for PBGUC
    * @param {string} leadId 
    * @param {string} type
    */
    getDataPBGUC = (leadId, type = 'lead') => {
        return Promise.resolve().then(() => {
            return this.pbgucsetting.pbgucObj.getData(leadId, type);
        });
    }

    /**
     * used to get all data for PBGUC
     */
    getAllDataPBGUC = () => {
        return Promise.resolve().then(async () => {
            return await this.pbgucsetting.pbgucObj.getData();
        });
    }

    /**
     * sample object for PBGUC setData
     */
    getSamplePBGUCObject = {
        'id': '',
        'type': 'lead',
        'state': 'LEAD_CREATE',
        'continueUrl': '',
        'application': []
    }

    /**
     * sample object for PBGUC application
     */
    getSampleApplicationPBGUCObject = {
        'id': '',
        'partnerId': '',
        'partnerName': '',
        'productName': 'PL',
        'image': '',
        'state': 'LEAD_CREATE',
        'continueUrl': '',
        'subtitle': '',
        'title': ""
    }
}