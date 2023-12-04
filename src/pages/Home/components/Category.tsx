import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import useGlobalStore from 'shared/zustand/globalStore';
import DisplayIcon from './DisplayIcon';

interface Props {
  text: string;
}

const Category = ({ text }: Props) => {
  // ZUSTAND GLOBAL STORE
  const { setSelectedCategory } = useGlobalStore();

  // ALL HOOKS
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View className="flex justify-center items-center basis-1/2">
      <TouchableOpacity
        onPress={() => {
          setSelectedCategory(text);
          navigation.navigate('SingleCategory');
        }}
        className="flex items-center justify-center"
      >
        {DisplayIcon(text)}
        <Text className="text-center font-semibold text-md">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
