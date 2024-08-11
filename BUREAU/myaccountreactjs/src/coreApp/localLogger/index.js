import { ENV } from '@constants/apiConstants';
export default function log (msg=""){
  if (ENV === "development") {
    return console.log(`${ENV}: ${msg && `${msg}`}`);
  }
};
