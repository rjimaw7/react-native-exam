/* eslint-disable global-require */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
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
    <View className="flex justify-center items-center">
      <TouchableOpacity
        onPress={() => {
          setSelectedCategory(text);
          navigation.navigate('SingleCategory');
        }}
        className="flex gap-2 items-center justify-center"
      >
        {DisplayIcon(text)}
        <Text className="text-center font-semibold text-lg">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
