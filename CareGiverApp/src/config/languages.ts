// Supported languages configuration

import {LanguageCode} from '@/types/common.types';

export interface LanguageConfig {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  gcpCode: string; // Google Cloud language code
  font?: string;
  rtl?: boolean; // Right-to-left
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    gcpCode: 'en-US',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    flag: '🇮🇳',
    gcpCode: 'hi-IN',
    font: 'NotoSansDevanagari-Regular',
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    gcpCode: 'ta-IN',
    font: 'NotoSansTamil-Regular',
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    gcpCode: 'te-IN',
    font: 'NotoSansTelugu-Regular',
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇮🇳',
    gcpCode: 'bn-IN',
    font: 'NotoSansBengali-Regular',
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    gcpCode: 'mr-IN',
    font: 'NotoSansDevanagari-Regular',
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    flag: '🇮🇳',
    gcpCode: 'gu-IN',
    font: 'NotoSansGujarati-Regular',
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    flag: '🇮🇳',
    gcpCode: 'kn-IN',
    font: 'NotoSansKannada-Regular',
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    flag: '🇮🇳',
    gcpCode: 'ml-IN',
    font: 'NotoSansMalayalam-Regular',
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    flag: '🇮🇳',
    gcpCode: 'pa-IN',
    font: 'NotoSansGurmukhi-Regular',
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    gcpCode: 'es-ES',
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    gcpCode: 'ar-SA',
    font: 'NotoSansArabic-Regular',
    rtl: true,
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    gcpCode: 'fr-FR',
  },
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    gcpCode: 'zh-CN',
    font: 'NotoSansCJK-Regular',
  },
];

export const getLanguageByCode = (code: LanguageCode): LanguageConfig | undefined => {
  return SUPPORTED_LANGUAGES.find(lang => lang.code === code);
};

export const getGCPLanguageCode = (code: LanguageCode): string => {
  const lang = getLanguageByCode(code);
  return lang?.gcpCode || 'en-US';
};

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

// Popular Indian languages (show first in selection)
export const POPULAR_INDIAN_LANGUAGES: LanguageCode[] = ['hi', 'ta', 'te', 'bn', 'mr'];
