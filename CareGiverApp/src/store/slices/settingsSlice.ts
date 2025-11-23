// Settings state slice

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppSettings} from '@/types/common.types';

const initialState: AppSettings = {
  language: 'en',
  voiceEnabled: true,
  ttsEnabled: true,
  notificationsEnabled: true,
  locationTrackingEnabled: false,
  emergencyMode: false,
  theme: 'light',
  fontSize: 'medium',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<Partial<AppSettings>>) => {
      return {...state, ...action.payload};
    },
    toggleVoice: state => {
      state.voiceEnabled = !state.voiceEnabled;
    },
    toggleTTS: state => {
      state.ttsEnabled = !state.ttsEnabled;
    },
    toggleNotifications: state => {
      state.notificationsEnabled = !state.notificationsEnabled;
    },
    toggleLocationTracking: state => {
      state.locationTrackingEnabled = !state.locationTrackingEnabled;
    },
    setEmergencyMode: (state, action: PayloadAction<boolean>) => {
      state.emergencyMode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<AppSettings['language']>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setFontSize: (state, action: PayloadAction<'small' | 'medium' | 'large'>) => {
      state.fontSize = action.payload;
    },
  },
});

export const {
  updateSettings,
  toggleVoice,
  toggleTTS,
  toggleNotifications,
  toggleLocationTracking,
  setEmergencyMode,
  setLanguage,
  setTheme,
  setFontSize,
} = settingsSlice.actions;

export default settingsSlice.reducer;
