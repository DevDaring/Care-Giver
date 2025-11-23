// Database models and types

export interface DBUser {
  id: string;
  name: string;
  role: string;
  language: string;
  pin?: string;
  password?: string;
  phone_number?: string;
  created_at: string;
  updated_at: string;
}

export interface DBContact {
  id: string;
  user_id: string;
  name: string;
  phone_number: string;
  relationship?: string;
  is_emergency: number; // SQLite doesn't support boolean
  photo_uri?: string;
  created_at: string;
}

export interface DBAlarm {
  id: string;
  user_id: string;
  type: string;
  title: string;
  description?: string;
  is_active: number;
  is_recurring: number;
  time?: string;
  repeat_days?: string; // JSON stringified array
  latitude?: number;
  longitude?: number;
  radius?: number;
  place_name?: string;
  person_name?: string;
  person_id?: string;
  trigger_time?: string;
  created_at: string;
  last_triggered?: string;
}

export interface DBChatMessage {
  id: string;
  user_id: string;
  role: string;
  content: string;
  image_uri?: string;
  timestamp: string;
  language?: string;
  was_voice_input: number;
}

export interface DBStory {
  id: string;
  user_id: string;
  title: string;
  content: string;
  image_uri?: string;
  language: string;
  created_at: string;
}

export interface DBAdminRestriction {
  id: string;
  user_id: string;
  feature_name: string;
  is_blocked: number;
  time_start?: string;
  time_end?: string;
  usage_limit?: number;
  current_usage?: number;
  created_at: string;
}

export interface DBActivityLog {
  id: string;
  user_id: string;
  action: string;
  details: string;
  timestamp: string;
  latitude?: number;
  longitude?: number;
}

export interface DBSettings {
  user_id: string;
  language: string;
  voice_enabled: number;
  tts_enabled: number;
  notifications_enabled: number;
  location_tracking_enabled: number;
  emergency_mode: number;
  theme: string;
  font_size: string;
}

export interface DBGeofence {
  id: string;
  user_id: string;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
  is_active: number;
  notify_on_enter: number;
  notify_on_exit: number;
  created_at: string;
}
