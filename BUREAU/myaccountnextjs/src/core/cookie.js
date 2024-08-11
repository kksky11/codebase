/* import library */
import Cookies from 'universal-cookie';

/**
 * used to set the cookie, with specific domain
 */
export class Cookie {

    constructor() {

        if (Cookie.instance instanceof Cookie) {
            return Cookie.instance;
        }

        this.cookieSetting = {
            'cookieObj': this.initiateCookie(),
            'version': Math.floor(Math.random() * 4000)
        };

        Cookie.instance = this;
    }

    /**
     * used to initiate the cookie
     * @returns instance of cookie
     */
    initiateCookie = () => {
        return new Cookies();
    }

    /**
     * used to set the cookie
     * @param {string} key 
     * @param {any} value 
     * @param {object} options -> optional
     */
    setCookie = (key, value, options = {
        domain: 'paisabazaar.com'
    }) => {
        return Promise.resolve().then(async () => {
            return await this.cookieSetting.cookieObj.set(key, value, options);
        });
    }

    /**
     * used to get the cookie on key basis
     * @param {string} key 
     * @returns 
     */
    getCookie = (key) => {
        return Promise.resolve().then(async () => {
            return await this.cookieSetting.cookieObj.get(key);
        });
    }
}