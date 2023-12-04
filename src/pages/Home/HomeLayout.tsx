import SearchInput from 'components/SearchInput';
import React from 'react';
import { View } from 'react-native';
import HomeContainer from './HomeContainer';

const HomeLayout = () => {
  return (
    <View className="h-full bg-white">
      <View className="px-5 py-7">
        <SearchInput />
      </View>
      <View>
        <HomeContainer />
      </View>
    </View>
  );
};

export default HomeLayout;
