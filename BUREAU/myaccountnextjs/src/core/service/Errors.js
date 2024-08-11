export default function errorCodes(error) {
    switch (error.message) {
        case 'Network request failed':
            return {
                status: 'INTERNET_ERROR',
                statusMsg: 'Please check your internet connection'
            };
        default:
            return error;

    }
}
