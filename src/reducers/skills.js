import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  skillsets: {},
};

const skills = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      // TODO: Fix
      return {
        ...state,
        filters: ['Hello'],
        skillsets: { test: [] },
      };
    },
  },
});

export const { updateFilters } = skills.actions;

export default skills.reducer;
