// Navigation types and parameters

import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

// Auth Stack
export type AuthStackParamList = {
  Splash: undefined;
  LanguageSelection: undefined;
  Onboarding: undefined;
  RoleSelection: undefined;
  Login: {role?: 'USER' | 'ADMIN'};
  Signup: {role: 'USER' | 'ADMIN'};
};

// User Stack
export type UserStackParamList = {
  UserHome: undefined;
  AlarmList: undefined;
  AlarmCreate: {type?: 'TIME' | 'LOCATION' | 'PERSON'};
  AlarmEdit: {alarmId: string};
  ContactList: undefined;
  ContactAdd: undefined;
  ContactEdit: {contactId: string};
  Camera: {purpose: 'medicine' | 'general' | 'profile'};
  Emergency: undefined;
  StoryGeneration: undefined;
  StoryView: {storyId: string};
  MusicPlayer: undefined;
  Settings: undefined;
  Profile: undefined;
};

// Admin Stack
export type AdminStackParamList = {
  AdminDashboard: undefined;
  UserMonitoring: {userId: string};
  RestrictionManagement: {userId: string};
  ActivityLogs: {userId: string};
  LocationTracking: {userId: string};
  GeofenceManagement: {userId: string};
  AdminSettings: undefined;
};

// Root Stack
export type RootStackParamList = {
  Auth: undefined;
  UserStack: undefined;
  AdminStack: undefined;
};

// Navigation Props
export type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;
export type UserNavigationProp = StackNavigationProp<UserStackParamList>;
export type AdminNavigationProp = StackNavigationProp<AdminStackParamList>;

// Route Props
export type LoginRouteProp = RouteProp<AuthStackParamList, 'Login'>;
export type SignupRouteProp = RouteProp<AuthStackParamList, 'Signup'>;
export type AlarmCreateRouteProp = RouteProp<UserStackParamList, 'AlarmCreate'>;
export type CameraRouteProp = RouteProp<UserStackParamList, 'Camera'>;
