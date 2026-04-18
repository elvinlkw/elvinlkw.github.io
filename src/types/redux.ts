import skillsReducer from 'src/reducers/skills';
import featuresReducer from 'src/reducers/features';

export type RootState = {
  skills: ReturnType<typeof skillsReducer>;
  features: ReturnType<typeof featuresReducer>;
};
