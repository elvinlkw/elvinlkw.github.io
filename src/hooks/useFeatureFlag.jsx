import { useSelector } from 'react-redux';

const useFeatureFlag = (featureName) => {
  const features = useSelector((state) => state.features);

  if (!features?.[featureName] || features?.[featureName] === null) {
    return false;
  }

  return features?.[featureName];
};

export default useFeatureFlag;
