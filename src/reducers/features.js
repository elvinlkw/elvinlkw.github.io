import { createSlice } from '@reduxjs/toolkit';
import {
  FF_SKILLS as skills,
  FF_EXPERIENCE as experience,
  FF_PROJECTS as projects,
  FF_SKILLS_EXPERTISE as skillsExpertise,
} from 'src/features';

const initialState = {
  [skills]: true,
  [experience]: true,
  [projects]: false,
  [skillsExpertise]: false,
};

const features = createSlice({
  name: 'features',
  initialState,
  reducers: {},
});

export default features.reducer;
