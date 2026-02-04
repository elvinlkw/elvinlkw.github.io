import { configureStore } from '@reduxjs/toolkit';

import skills from './reducers/skills';
import features from './reducers/features';

export default configureStore({
  reducer: {
    skills,
    features,
  },
});
