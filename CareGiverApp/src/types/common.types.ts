// Common types used throughout the application

export type UserRole = 'USER' | 'ADMIN';

export type LanguageCode =
  | 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr'
  | 'gu' | 'kn' | 'ml' | 'pa' | 'es' | 'ar'
  | 'fr' | 'zh';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  language: LanguageCode;
  pin?: string;
  password?: string;
  phoneNumber?: string;
  emergencyContacts?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  relationship?: string;
  isEmergency: boolean;
  photoUri?: string;
  createdAt: Date;
}

export type AlarmType = 'TIME' | 'LOCATION' | 'PERSON';

export interface Alarm {
  id: string;
  userId: string;
  type: AlarmType;
  title: string;
  description?: string;
  isActive: boolean;
  isRecurring: boolean;

  // For TIME alarms
  time?: string; // HH:mm format
  repeatDays?: number[]; // 0-6 for Sun-Sat

  // For LOCATION alarms
  latitude?: number;
  longitude?: number;
  radius?: number; // in meters
  placeName?: string;

  // For PERSON alarms
  personName?: string;
  personId?: string;
  triggerTime?: Date;

  createdAt: Date;
  lastTriggered?: Date;
}

export interface ChatMessage {
  id: string;
  userId: string;
  role: 'user' | 'assistant';
  content: string;
  imageUri?: string;
  timestamp: Date;
  language?: LanguageCode;
  wasVoiceInput?: boolean;
}

export interface AIResponse {
  text: string;
  action?: AIAction;
  language: LanguageCode;
}

export interface AIAction {
  type: 'ALARM' | 'CALL' | 'EMERGENCY' | 'STORY' | 'CAMERA' | 'LOCATION' | 'NONE';
  payload?: any;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  imageUri?: string;
  language: LanguageCode;
  createdAt: Date;
}

export interface AdminRestriction {
  id: string;
  userId: string;
  featureName: string;
  isBlocked: boolean;
  timeRestriction?: {
    startTime: string;
    endTime: string;
  };
  usageLimit?: number;
  currentUsage?: number;
  createdAt: Date;
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: Date;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface AppSettings {
  language: LanguageCode;
  voiceEnabled: boolean;
  ttsEnabled: boolean;
  notificationsEnabled: boolean;
  locationTrackingEnabled: boolean;
  emergencyMode: boolean;
  theme: 'light' | 'dark';
  fontSize: 'small' | 'medium' | 'large';
}

export interface GeofenceArea {
  id: string;
  userId: string;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
  isActive: boolean;
  notifyOnEnter: boolean;
  notifyOnExit: boolean;
  createdAt: Date;
}
