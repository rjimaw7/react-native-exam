import { View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const ImagePlaceHolder = () => {
  return (
    <View>
      <ShimmerPlaceHolder
        style={{
          height: 300,
          width: 300,
        }}
      />
    </View>
  );
};

export default ImagePlaceHolder;
