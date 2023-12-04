import { View } from 'react-native';
import React from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const SingleProductSkeleton = () => {
  return (
    <View className="flex p-3 items-center gap-3">
      <ShimmerPlaceHolder />
      <View>
        <ShimmerPlaceHolder
          style={{
            height: 300,
            width: 300,
          }}
        />
      </View>
      <View className="flex items-center justify-center gap-2">
        <ShimmerPlaceHolder />
        <ShimmerPlaceHolder />
        <ShimmerPlaceHolder />
      </View>
      <ShimmerPlaceHolder
        style={{
          width: 300,
        }}
      />
      <ShimmerPlaceHolder
        style={{
          width: 300,
        }}
      />
    </View>
  );
};

export default SingleProductSkeleton;
