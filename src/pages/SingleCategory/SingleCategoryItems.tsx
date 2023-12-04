import { View, Text, Image } from 'react-native';
import React from 'react';
import { ICategory } from 'shared/interfaces/ICategory';

interface Props {
  item: ICategory;
}

const SingleCategoryItems = ({ item }: Props) => {
  return (
    // <View className="flex flex-row gap-2 px-3 py-5">
    <View className="flex gap-2 p-3">
      <Image
        source={{
          uri: item.thumbnail,
        }}
        style={{ width: 300, height: 300 }}
        resizeMode="stretch"
      />
      <View className="flex gap-2">
        <Text className="font-semibold text-lg">{item.title}</Text>
        <Text className="font-semibold text-lg">${item.price}</Text>
      </View>
    </View>
  );
};

export default SingleCategoryItems;
