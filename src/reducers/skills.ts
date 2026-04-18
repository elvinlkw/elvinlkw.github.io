import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill, Section } from 'src/types';
import { skillsets } from 'src/containers/skills/constants';
import isEmpty from 'lodash/isEmpty';

type SkillsState = {
  filters: Section[];
  skillsets: Skill[];
};

const initialState: SkillsState = {
  filters: [],
  skillsets,
};

const filterSkillsets = (filters: Section[]): Skill[] => {
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
    addFilter: (state, action: PayloadAction<Section>) => {
      const updatedFilters = [...state.filters, action.payload];
      return {
        ...state,
        filters: updatedFilters,
        skillsets: filterSkillsets(updatedFilters),
      };
    },
    removeFilter: (state, action: PayloadAction<Section>) => {
      const updatedFilters = state.filters.filter(
        (fname) => fname !== action.payload
      );
      return {
        ...state,
        filters: updatedFilters,
        skillsets: filterSkillsets(updatedFilters),
      };
    },
    clearFilters: () => {
      return initialState;
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = skills.actions;

export default skills.reducer;
