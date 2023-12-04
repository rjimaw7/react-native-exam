import { View } from 'react-native';
import React from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const HomeSkeleton = () => {
  return (
    <View className="flex justify-center items-center basis-1/2 py-2">
      <ShimmerPlaceHolder
        style={{
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
};

export default HomeSkeleton;
