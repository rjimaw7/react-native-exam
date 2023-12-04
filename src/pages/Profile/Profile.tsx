import { View, Text, Image } from 'react-native';
import React from 'react';
import { IProfile } from 'shared/interfaces/IProfile';

interface Props {
  item: IProfile;
}

const Profile = ({ item }: Props) => {
  return (
    <View className="flex flex-wrap flex-row items-center">
      <Image
        source={{
          uri: item.image,
        }}
        style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
      />
      <View className="flex gap-1">
        <Text className="font-bold text-xl">@{item.username}</Text>
        <Text>{`${item.firstName} ${item.lastName}`}</Text>
      </View>
    </View>
  );
};

export default Profile;
