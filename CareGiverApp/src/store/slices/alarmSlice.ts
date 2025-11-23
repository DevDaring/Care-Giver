// Alarm state slice

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alarm} from '@/types/common.types';

interface AlarmState {
  alarms: Alarm[];
  activeAlarms: Alarm[];
  isLoading: boolean;
}

const initialState: AlarmState = {
  alarms: [],
  activeAlarms: [],
  isLoading: false,
};

const alarmSlice = createSlice({
  name: 'alarm',
  initialState,
  reducers: {
    setAlarms: (state, action: PayloadAction<Alarm[]>) => {
      state.alarms = action.payload;
      state.activeAlarms = action.payload.filter(alarm => alarm.isActive);
    },
    addAlarm: (state, action: PayloadAction<Alarm>) => {
      state.alarms.push(action.payload);
      if (action.payload.isActive) {
        state.activeAlarms.push(action.payload);
      }
    },
    updateAlarm: (state, action: PayloadAction<Alarm>) => {
      const index = state.alarms.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.alarms[index] = action.payload;
      }

      // Update active alarms
      state.activeAlarms = state.alarms.filter(alarm => alarm.isActive);
    },
    deleteAlarm: (state, action: PayloadAction<string>) => {
      state.alarms = state.alarms.filter(a => a.id !== action.payload);
      state.activeAlarms = state.activeAlarms.filter(a => a.id !== action.payload);
    },
    toggleAlarm: (state, action: PayloadAction<string>) => {
      const alarm = state.alarms.find(a => a.id === action.payload);
      if (alarm) {
        alarm.isActive = !alarm.isActive;
        state.activeAlarms = state.alarms.filter(a => a.isActive);
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setAlarms,
  addAlarm,
  updateAlarm,
  deleteAlarm,
  toggleAlarm,
  setLoading,
} = alarmSlice.actions;

export default alarmSlice.reducer;
