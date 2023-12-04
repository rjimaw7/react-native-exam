import SearchInput from 'components/SearchInput';
import React from 'react';
import { View } from 'react-native';
import SingleProductContainer from './SingleProductContainer';

const SingleProductLayout = () => {
  return (
    <View className="h-full bg-white">
      <View className="px-5 py-7">
        <SearchInput />
      </View>
      <View className="px-5">
        <SingleProductContainer />
      </View>
    </View>
  );
};

export default SingleProductLayout;
