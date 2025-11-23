// Contact state slice

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '@/types/common.types';

interface ContactState {
  contacts: Contact[];
  emergencyContacts: Contact[];
  isLoading: boolean;
}

const initialState: ContactState = {
  contacts: [],
  emergencyContacts: [],
  isLoading: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
      state.emergencyContacts = action.payload.filter(c => c.isEmergency);
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      if (action.payload.isEmergency) {
        state.emergencyContacts.push(action.payload);
      }
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
      state.emergencyContacts = state.contacts.filter(c => c.isEmergency);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload);
      state.emergencyContacts = state.emergencyContacts.filter(c => c.id !== action.payload);
    },
    toggleEmergency: (state, action: PayloadAction<string>) => {
      const contact = state.contacts.find(c => c.id === action.payload);
      if (contact) {
        contact.isEmergency = !contact.isEmergency;
        state.emergencyContacts = state.contacts.filter(c => c.isEmergency);
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setContacts,
  addContact,
  updateContact,
  deleteContact,
  toggleEmergency,
  setLoading,
} = contactSlice.actions;

export default contactSlice.reducer;
