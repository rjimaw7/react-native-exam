import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { ICategory } from 'shared/interfaces/ICategory';
import useGlobalStore from 'shared/zustand/globalStore';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

interface Props {
  item: ICategory;
}

const SingleCategoryItems = ({ item }: Props) => {
  // ZUSTAND GLOBAL STORE
  const { setSelectedProduct } = useGlobalStore();

  // ALL HOOKS
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View className="flex gap-2 p-3">
      <TouchableWithoutFeedback
        onPress={() => {
          setSelectedProduct(item.id);
          navigation.navigate('SingleProduct');
        }}
      >
        <Image
          source={{
            uri: item.thumbnail,
          }}
          style={{ width: 300, height: 300 }}
          resizeMode="stretch"
        />
      </TouchableWithoutFeedback>
      <View className="flex gap-2">
        <Text className="font-semibold text-lg">{item.title}</Text>
        <Text className="font-semibold text-lg">${item.price}</Text>
      </View>
    </View>
  );
};

export default SingleCategoryItems;
