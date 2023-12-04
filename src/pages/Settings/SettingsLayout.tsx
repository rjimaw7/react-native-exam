import { View } from 'react-native';
import React from 'react';
import SearchInput from 'components/SearchInput';
import SettingsContainer from './SettingsContainer';

const SettingsLayout = () => {
  return (
    <View className="h-full bg-white">
      <View className="px-5 py-7">
        <SearchInput />
      </View>
      <View>
        <SettingsContainer />
      </View>
    </View>
  );
};

export default SettingsLayout;
