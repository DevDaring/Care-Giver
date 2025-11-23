// App constants

export const COLORS = {
  // Primary Colors
  primary: '#2196F3',
  primaryDark: '#1976D2',
  primaryLight: '#BBDEFB',

  // Secondary Colors
  secondary: '#FF9800',
  secondaryDark: '#F57C00',
  secondaryLight: '#FFE0B2',

  // Status Colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',

  // UI Colors
  background: '#FFFFFF',
  backgroundDark: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#212121',
  textSecondary: '#757575',
  textLight: '#BDBDBD',
  border: '#E0E0E0',

  // Chat Colors
  userBubble: '#2196F3',
  aiBubble: '#E0E0E0',

  // Alarm Type Colors
  timeAlarm: '#4CAF50',
  locationAlarm: '#FF9800',
  personAlarm: '#9C27B0',

  // Emergency
  emergency: '#F44336',
};

export const SIZES = {
  // Font Sizes
  fontSmall: 12,
  fontMedium: 16,
  fontLarge: 20,
  fontXLarge: 24,
  fontXXLarge: 32,

  // Spacing
  spacing: 8,
  spacingSmall: 4,
  spacingMedium: 12,
  spacingLarge: 16,
  spacingXLarge: 24,

  // Border Radius
  radiusSmall: 4,
  radiusMedium: 8,
  radiusLarge: 12,
  radiusXLarge: 24,

  // Button Heights
  buttonSmall: 36,
  buttonMedium: 44,
  buttonLarge: 52,

  // Icon Sizes
  iconSmall: 16,
  iconMedium: 24,
  iconLarge: 32,
  iconXLarge: 48,
};

export const FONTS = {
  regular: 'NotoSans-Regular',
  bold: 'NotoSans-Bold',
  medium: 'NotoSans-Medium',
  light: 'NotoSans-Light',

  // Language-specific fonts
  hindi: 'NotoSansDevanagari-Regular',
  tamil: 'NotoSansTamil-Regular',
  telugu: 'NotoSansTelugu-Regular',
  bengali: 'NotoSansBengali-Regular',
  gujarati: 'NotoSansGujarati-Regular',
  kannada: 'NotoSansKannada-Regular',
  malayalam: 'NotoSansMalayalam-Regular',
  punjabi: 'NotoSansGurmukhi-Regular',
  arabic: 'NotoSansArabic-Regular',
  chinese: 'NotoSansCJK-Regular',
};

export const TIMING = {
  animationFast: 200,
  animationMedium: 300,
  animationSlow: 500,
  debounceInput: 300,
  alarmSnooze: 5, // minutes
  voiceTimeout: 60, // seconds
};

export const LIMITS = {
  maxChatHistory: 100,
  maxVoiceRecordingDuration: 60, // seconds
  maxImageSize: 5 * 1024 * 1024, // 5 MB
  geofenceMinRadius: 50, // meters
  geofenceMaxRadius: 5000, // meters
};

export const API = {
  geminiModel: 'gemini-2.0-flash-exp',
  geminiVisionModel: 'gemini-2.0-flash-exp',
  gcpTtsVoice: 'en-US-Neural2-C',
  gcpSttModel: 'default',
  requestTimeout: 30000, // 30 seconds
};

export const DATABASE = {
  name: 'caregiverdb.db',
  version: 1,
  location: 'default',
};

export const FEATURES = {
  ALARM: 'alarm',
  CALL: 'call',
  MESSAGE: 'message',
  CAMERA: 'camera',
  LOCATION: 'location',
  EMERGENCY: 'emergency',
  STORY: 'story',
  MUSIC: 'music',
};
