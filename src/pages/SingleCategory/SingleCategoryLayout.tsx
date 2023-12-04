import SearchInput from 'components/SearchInput';
import React from 'react';
import { View } from 'react-native';
import SingleCategoryContainer from './SingleCategoryContainer';

const SingleCategoryLayout = () => {
  return (
    <View className="h-full">
      <View className="px-5 py-7">
        <SearchInput />
      </View>
      <View className="px-5">
        <SingleCategoryContainer />
      </View>
    </View>
  );
};

export default SingleCategoryLayout;
