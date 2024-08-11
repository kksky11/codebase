import i18n             from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon         from '@locale/en/common.json';
import enMyProfile      from '@locale/en/myProfile.json';
import enFAQ            from '@locale/en/faq.json';
import enContactUs      from '@locale/en/contactUs.json';
import enPreferences    from '@locale/en/preferences.json';
import enLeftMenu       from '@locale/en/leftMenu.json';


import hindiCommon      from '@locale/hindi/common.json';
import hindiMyProfile   from '@locale/hindi/myProfile.json';
import hindiFAQ         from '@locale/hindi/faq.json';
import hindiContactUs   from '@locale/hindi/contactUs.json';
import hindiPreferences from '@locale/hindi/preferences.json';
import hindiLeftMenu    from '@locale/hindi/leftMenu.json';

export default i18n
    .use(LanguageDetector)
    .init({
        resources: {
          en: {
            common      : enCommon,
            myProfile   : enMyProfile,
            faq         : enFAQ,
            contactUs   : enContactUs, 
            preferences : enPreferences,         
            leftMenu    : enLeftMenu,         
          },
          hindi: {
            common      : hindiCommon,
            myProfile   : hindiMyProfile,
            faq         : hindiFAQ,
            contactUs   : hindiContactUs,
            preferences : hindiPreferences,
            leftMenu    : hindiLeftMenu,    
          }
        },
        fallbackLng       : 'en',
        ns                : ['leftMenu','preferences','common','myProfile', 'faq','contactUs'],
        defaultNS         : 'common',
        interpolation     : {formatSeparator : ","},
        react             : {defaultTransParent: true}
    });
