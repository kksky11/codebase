import * as ApiConstants from 'constants/ApiConstants';

var CryptoJS = require("crypto-js");

const encrypt_decrypt_key = "anySafeKey"; // key used for encryption and decryption 

const hostURL = ApiConstants.LOCAL_HOST_URL;
const hostname = window.location.hostname;


const AsyncStorage = {  
  setItem: async function (key, value) {
    if(ApiConstants.ENV === 'development' && hostname === hostURL ) {
      return localStorage.setItem(key, value);
    } else {
      let ciphertext = value;
      let cipherKey = CryptoJS.SHA256(key);
      if (typeof value !== "undefined" && value !== null) {
        value = typeof value === "object" ? JSON.stringify(value) : value;
        ciphertext = CryptoJS.AES.encrypt(value, encrypt_decrypt_key);
      }
      return localStorage.setItem(cipherKey, ciphertext);
    }
    
  },
  getItem: async function (key) { 
    if(ApiConstants.ENV === 'development' && hostname === hostURL) {
      return localStorage.getItem(key);
    } else {
      const cipherKey = CryptoJS.SHA256(key);
      const value = localStorage.getItem(cipherKey);
      let plaintext = value;    
      if (typeof value !== "undefined" && value !== null) {
        let bytes = CryptoJS.AES.decrypt(value.toString(), encrypt_decrypt_key);
        plaintext = bytes.toString(CryptoJS.enc.Utf8);     
      }
      return plaintext;
    }

  },
  clear: async function () {
    return localStorage.clear();
  },
  removeItem: async function (key) {
    if(ApiConstants.ENV === 'development' && hostname === hostURL) {
      return localStorage.removeItem(key);
    } else {
      let cipherKey = CryptoJS.SHA256(key);
      return localStorage.removeItem(cipherKey);
    }
  }
};

const setKey = (key, value) => (
  new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value).then(() => {
        const setKeyEvent = new CustomEvent('setKey', {
          detail: {key,value}
        });
        window.dispatchEvent(setKeyEvent);
        resolve("true");
      }).catch(() => {
        reject("false");
      });
  })
);

const setData = (key, data) => (
  new Promise((resolve, reject) => {
    let newData;
    ApiConstants.ENV === 'development' && hostname === hostURL ? newData = JSON.stringify(data) : newData = data;
    AsyncStorage.setItem(key, newData)
    .then(() => {resolve("true");})
    .catch(() => {reject("false");});
  })
);

const getKey = key =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(value => {resolve(value);})
      .catch(() => {reject("false");});
});

const getData = key =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(value => {resolve(JSON.parse(value));})
      .catch(() => {reject("false");});
});

const removeKey = (key) =>
  new Promise((resolve, reject) => {
    AsyncStorage.removeItem(key)
      .then(() => {resolve("true");})
      .catch(() => {reject("false");});
});

const clearData = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.clear()
      .then(() => {resolve("true");})
      .catch(() => {reject("false");});
});

export {
  setKey,
  setData,
  getKey,
  getData,
  removeKey,
  clearData
};