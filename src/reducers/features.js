import { createSlice } from '@reduxjs/toolkit';
import {
  FF_SKILLS as skills,
  FF_EXPERIENCE as experience,
  FF_PROJECTS as projects,
} from 'src/features';

const initialState = {
  [skills]: true,
  [experience]: true,
  [projects]: false,
};

const features = createSlice({
  name: 'features',
  initialState,
  reducers: {},
});

export default features.reducer;
