import { useSelector } from 'react-redux';
import { RootState } from 'src/types/redux';
import type { FeatureFlagKey } from 'src/types';

const useFeatureFlag = (featureName: FeatureFlagKey): boolean => {
  const features = useSelector((state: RootState) => state.features);
  return features[featureName] ?? false;
};

export default useFeatureFlag;
