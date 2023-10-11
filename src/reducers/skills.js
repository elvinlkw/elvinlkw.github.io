import { createSlice } from '@reduxjs/toolkit';
import { skillsets } from 'src/containers/skills/constants';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  filters: [],
  skillsets,
};

const filterSkillsets = (filters) => {
  if (isEmpty(filters)) {
    return skillsets;
  }

  return skillsets.filter((skill) =>
    skill.section.some((sec) => filters.includes(sec))
  );
};

const skills = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      const updatedFilters = [...state.filters, action.payload];
      return {
        ...state,
        filters: updatedFilters,
        skillsets: filterSkillsets(updatedFilters),
      };
    },
    removeFilter: (state, action) => {
      const updatedFilters = state.filters.filter(
        (fname) => fname !== action.payload
      );
      return {
        ...state,
        filters: updatedFilters,
        skillsets: filterSkillsets(updatedFilters),
      };
    },
  },
});

export const { addFilter, removeFilter } = skills.actions;

export default skills.reducer;
