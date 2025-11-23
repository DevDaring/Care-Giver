// Chat state slice

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChatMessage} from '@/types/common.types';

interface ChatState {
  messages: ChatMessage[];
  isTyping: boolean;
  isListening: boolean;
  currentContext: string[];
}

const initialState: ChatState = {
  messages: [],
  isTyping: false,
  isListening: false,
  currentContext: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);

      // Update context (keep last 5 messages for context)
      const contextText = action.payload.content;
      state.currentContext.push(contextText);
      if (state.currentContext.length > 5) {
        state.currentContext.shift();
      }
    },
    clearMessages: state => {
      state.messages = [];
      state.currentContext = [];
    },
    setTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    setListening: (state, action: PayloadAction<boolean>) => {
      state.isListening = action.payload;
    },
    loadMessages: (state, action: PayloadAction<ChatMessage[]>) => {
      state.messages = action.payload;

      // Build context from loaded messages
      state.currentContext = action.payload
        .slice(-5)
        .map(msg => msg.content);
    },
  },
});

export const {
  addMessage,
  clearMessages,
  setTyping,
  setListening,
  loadMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
