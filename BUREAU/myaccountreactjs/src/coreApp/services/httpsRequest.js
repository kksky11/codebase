export function request(API_URL, method, headerData, body, formData) {
    return fetch(
        API_URL
        , {
            method,
            headers:{
                ...headerData,
                'Content-Type': 'application/json',
                'site-id': '29ebe356-528f-43fc-aa7a-9712808d0117'
             },
            body: body ? JSON.stringify(body) : formData,
        });
}