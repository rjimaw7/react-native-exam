import React from 'react';
import { View } from 'react-native';
import ProfileContainer from './ProfileContainer';
import SearchInputUsers from 'components/SearchInputUsers';

const ProfileLayout = () => {
  return (
    <View className="h-full bg-white">
      <View className="px-5 py-7">
        <SearchInputUsers />
      </View>
      <View className="px-5">
        <ProfileContainer />
      </View>
    </View>
  );
};

export default ProfileLayout;
