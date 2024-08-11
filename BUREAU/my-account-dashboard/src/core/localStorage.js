/* import library */
import SecureLS from 'secure-ls';
//var ls = new SecureLS({ encodingType: process.env.NEXT_PUBLIC_ENCRYPT_DATA == 'true' ? 'des' : '', isCompression: process.env.NEXT_PUBLIC_ENCRYPT_DATA == 'true' ? true : false, encryptionSecret: process.env.NEXT_PUBLIC_SK });
 let ls=new SecureLS({ encodingType:'des'});
/**
 * used to set the data to localStorage
 */
export const asyncLocalStorage = {
    /**
     * 
     * @param {string} key 
     * @param {string/number/object} value 
     * @returns 
     */
    setData: function (key, value) {

        if (!value?.expiry && key == process.env.NEXT_PUBLIC_STORE_NAME) {
            const now = new Date();
            value = {
                ...value,
                expiry: now.getTime() + parseInt(process.env.NEXT_PUBLIC_LOCAL_STORAGE_EXPIRY),
            }
        }

        return Promise.resolve().then(function () {
            let newData = typeof value === 'object' ? JSON.stringify(value) : value;
            // localStorage.setItem(key, newData);
            if (process.env.NEXT_PUBLIC_ENCRYPT_DATA == 'true') {
                ls.set(key, newData);
            } else {
                ls.set(key, value);
            }
            // if (process.env.NEXT_PUBLIC_ENV == 'development') {
            //     ls.set(key, value);
            // }
            // if (process.env.NEXT_PUBLIC_ENV == 'production') {
            //     ls.set(key, newData);
            // }
        });
    },
    getData: function (key) {
        return Promise.resolve().then(function () {
            // return JSON.parse(localStorage.getItem(key));
            // if (process.env.NEXT_PUBLIC_ENV == 'development') {
            //     try {
            //         return ls.get(key);
            //     }
            //     catch {
            //         return {};
            //     }
            // }
            // if (process.env.NEXT_PUBLIC_ENV == 'production') {
            //     try {
            //         return ls.get(key) ? JSON.parse(ls.get(key)) : ls.get(key);
            //     }
            //     catch {
            //         return {};
            //     }
            // }
            if (process.env.NEXT_PUBLIC_ENCRYPT_DATA == 'true') {
                try {
                    return ls.get(key) ? JSON.parse(ls.get(key)) : ls.get(key);
                }
                catch {
                    return {};
                }
            } else {
                try {
                    return ls.get(key);
                }
                catch {
                    return {};
                }
            }
        });
    },
    resetKey: function (key) {
        return Promise.resolve().then(function () {
            localStorage.removeItem(key);
        });
    },
    clear: function (key) {
        return Promise.resolve().then(function () {
            localStorage.clear();
        });
    }
};