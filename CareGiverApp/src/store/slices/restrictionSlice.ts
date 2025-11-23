// Admin restriction state slice

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AdminRestriction} from '@/types/common.types';

interface RestrictionState {
  restrictions: AdminRestriction[];
  isLoading: boolean;
}

const initialState: RestrictionState = {
  restrictions: [],
  isLoading: false,
};

const restrictionSlice = createSlice({
  name: 'restriction',
  initialState,
  reducers: {
    setRestrictions: (state, action: PayloadAction<AdminRestriction[]>) => {
      state.restrictions = action.payload;
    },
    addRestriction: (state, action: PayloadAction<AdminRestriction>) => {
      const index = state.restrictions.findIndex(
        r => r.featureName === action.payload.featureName,
      );
      if (index !== -1) {
        state.restrictions[index] = action.payload;
      } else {
        state.restrictions.push(action.payload);
      }
    },
    removeRestriction: (state, action: PayloadAction<string>) => {
      state.restrictions = state.restrictions.filter(
        r => r.featureName !== action.payload,
      );
    },
    updateUsage: (
      state,
      action: PayloadAction<{featureName: string; increment: number}>,
    ) => {
      const restriction = state.restrictions.find(
        r => r.featureName === action.payload.featureName,
      );
      if (restriction && restriction.currentUsage !== undefined) {
        restriction.currentUsage += action.payload.increment;
      }
    },
    resetUsage: (state, action: PayloadAction<string>) => {
      const restriction = state.restrictions.find(
        r => r.featureName === action.payload,
      );
      if (restriction) {
        restriction.currentUsage = 0;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setRestrictions,
  addRestriction,
  removeRestriction,
  updateUsage,
  resetUsage,
  setLoading,
} = restrictionSlice.actions;

export default restrictionSlice.reducer;
