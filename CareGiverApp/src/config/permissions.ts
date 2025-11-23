// Permissions configuration for iOS and Android

import {Platform} from 'react-native';
import {PERMISSIONS, Permission} from 'react-native-permissions';

export const APP_PERMISSIONS = {
  CAMERA: Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
  }) as Permission,

  MICROPHONE: Platform.select({
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
  }) as Permission,

  LOCATION: Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  }) as Permission,

  LOCATION_ALWAYS: Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
    android: PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
  }) as Permission,

  CONTACTS: Platform.select({
    ios: PERMISSIONS.IOS.CONTACTS,
    android: PERMISSIONS.ANDROID.READ_CONTACTS,
  }) as Permission,

  PHONE_CALL: Platform.select({
    ios: undefined,
    android: PERMISSIONS.ANDROID.CALL_PHONE,
  }) as Permission | undefined,

  SMS: Platform.select({
    ios: undefined,
    android: PERMISSIONS.ANDROID.SEND_SMS,
  }) as Permission | undefined,

  NOTIFICATIONS: Platform.select({
    ios: PERMISSIONS.IOS.NOTIFICATIONS,
    android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
  }) as Permission,
};

export const CRITICAL_PERMISSIONS = [
  APP_PERMISSIONS.MICROPHONE,
  APP_PERMISSIONS.CAMERA,
];

export const OPTIONAL_PERMISSIONS = [
  APP_PERMISSIONS.LOCATION,
  APP_PERMISSIONS.CONTACTS,
];

// Permission descriptions for users
export const PERMISSION_DESCRIPTIONS = {
  CAMERA: {
    en: 'We need camera access to help you analyze medicine bottles and documents.',
    hi: 'दवाई की बोतलों और दस्तावेजों का विश्लेषण करने के लिए हमें कैमरा एक्सेस चाहिए।',
  },
  MICROPHONE: {
    en: 'We need microphone access for voice commands and conversations.',
    hi: 'आवाज के आदेशों और बातचीत के लिए हमें माइक्रोफ़ोन एक्सेस चाहिए।',
  },
  LOCATION: {
    en: 'We need location access for location-based reminders and emergency help.',
    hi: 'स्थान-आधारित अनुस्मारक और आपातकालीन सहायता के लिए हमें स्थान एक्सेस चाहिए।',
  },
  CONTACTS: {
    en: 'We need contacts access to help you call your family and friends.',
    hi: 'अपने परिवार और दोस्तों को कॉल करने में मदद के लिए हमें संपर्कों तक पहुंच चाहिए।',
  },
  NOTIFICATIONS: {
    en: 'We need notification permission to remind you about important events.',
    hi: 'महत्वपूर्ण घटनाओं की याद दिलाने के लिए हमें सूचना अनुमति चाहिए।',
  },
};
