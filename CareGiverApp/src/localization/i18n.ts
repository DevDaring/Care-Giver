// i18n configuration

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import translation files
import en from './languages/en.json';
import hi from './languages/hi.json';
import ta from './languages/ta.json';
import te from './languages/te.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {translation: en},
      hi: {translation: hi},
      ta: {translation: ta},
      te: {translation: te},
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
