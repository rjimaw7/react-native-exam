import SearchInput from 'components/SearchInput';
import React from 'react';
import { View } from 'react-native';
import SearchQueryContainer from './SearchQueryContainer';

const SearchQueryLayout = () => {
  return (
    <View className="h-full">
      <View className="px-5 py-7">
        <SearchInput />
      </View>
      <View className="px-5">
        <SearchQueryContainer />
      </View>
    </View>
  );
};

export default SearchQueryLayout;
