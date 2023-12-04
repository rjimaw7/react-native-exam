/* eslint-disable import/no-extraneous-dependencies */
import { TextInput, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const SearchInputUsers = () => {
  return (
    <View className="border border-black flex flex-row justify-between px-3 py-2 rounded-md mt-4">
      <TextInput
        placeholder="Search Users"
        className="basis-3/4"
        // value={searchQuery}
        // onChangeText={(text) => setSearchQuery(text)}
        returnKeyType="search"
        // onSubmitEditing={(event) => {
        //   setSearchQuery(event.nativeEvent.text.toLowerCase());
        //   navigation.navigate('SearchProduct');
        // }}
      />
      <Feather
        // onPress={() => {
        //   if (searchQuery.length > 0) {
        //     navigation.navigate('SearchProduct');
        //   }
        // }}
        name="search"
        size={24}
        color="black"
        className="basis-1/4"
      />
    </View>
  );
};

export default SearchInputUsers;
