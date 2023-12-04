import { View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const ProfileSkeleton = () => {
  return (
    <View className="flex flex-wrap flex-row items-center gap-4 my-1">
      <ShimmerPlaceHolder
        style={{
          height: 80,
          width: 80,
          borderRadius: 80 / 2,
        }}
      />
      <View className="flex gap-1">
        <ShimmerPlaceHolder />
      </View>
    </View>
  );
};

export default ProfileSkeleton;
