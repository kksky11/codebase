export const getIsMobile = () => {
    //"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    //"Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
    const userAgent = navigator === 'undefined' ? 'SSR' : navigator.userAgent
    let currentDevice = [];
    if (userAgent) {
        if (userAgent.match(/Android/i)) currentDevice.push("isAndroid");
        if (userAgent.match(/iPhone|iPad|iPod/i)) currentDevice.push("isIos");
        if (userAgent.match(/IEMobile/i)) currentDevice.push("isWindows");
        if (userAgent.match(/SSR/i)) currentDevice.push("isSSR");
        if (currentDevice.includes('isAndroid') || currentDevice.includes('isIos') || currentDevice.includes('isWindows')) {
            return true
        } else {
            return false
        }
    }
}