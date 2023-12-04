/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import useGlobalStore from 'shared/zustand/categoryStore';
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

const SearchInput = () => {
  // ZUSTAND
  const { searchQuery, setSearchQuery } = useGlobalStore();

  // ALL HOOKS
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.name === 'SearchProduct' && !searchQuery.length) {
      navigation.navigate('Home');
    }
  }, [route, searchQuery]);

  return (
    <View className="border border-black flex flex-row justify-between px-3 py-2 rounded-md mt-4">
      <TextInput
        placeholder="Search Products"
        className="basis-3/4"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        returnKeyType="search"
        onSubmitEditing={(event) => {
          setSearchQuery(event.nativeEvent.text.toLowerCase());
          navigation.navigate('SearchProduct');
        }}
      />
      <Feather
        onPress={() => {
          if (searchQuery.length > 0) {
            navigation.navigate('SearchProduct');
          }
        }}
        name="search"
        size={24}
        color="black"
        className="basis-1/4"
      />
    </View>
  );
};

export default SearchInput;
