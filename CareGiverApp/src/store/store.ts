// Redux store configuration

import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import chatReducer from './slices/chatSlice';
import alarmReducer from './slices/alarmSlice';
import contactReducer from './slices/contactSlice';
import settingsReducer from './slices/settingsSlice';
import restrictionReducer from './slices/restrictionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    alarm: alarmReducer,
    contact: contactReducer,
    settings: settingsReducer,
    restriction: restrictionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['chat/addMessage'],
        // Ignore these paths in the state
        ignoredPaths: ['chat.messages'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
