/**
 * used to make api call without redux service layer
 * @param {function} serviceMethod 
 * @param {function} callback 
 */
export const actionDispatcher = async (serviceMethod, callback) => {
    let response = await serviceMethod();
    let responseJson = (response && !response.ok) ? response : await response.json();
    if (responseJson.status == true) {
        if (responseJson?.response?.errorMsg) {
            callback(responseJson?.response?.errorMsg, undefined);
        } else {
            callback(undefined, { response: responseJson?.response });
        }
    } else {
        callback({ statusMessage: responseJson.statusMessage, response: responseJson?.response }, undefined);
    }
}