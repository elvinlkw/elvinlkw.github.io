import { configureStore } from '@reduxjs/toolkit';

import skills from './reducers/skills';

export default configureStore({
  reducer: {
    skills,
  },
});
