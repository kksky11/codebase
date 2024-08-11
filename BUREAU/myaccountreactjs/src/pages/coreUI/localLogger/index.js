import {ENV}   from 'constants/ApiConstants';
const log = (msg="") => {
  if (ENV === "development") {
     console.log(`${ENV}=>${msg && `${msg}`}`);
  }
};

export {log};
