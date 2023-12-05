/* eslint-disable import/no-extraneous-dependencies */
import { TextInput, View } from 'react-native';
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import useGlobalStore from 'shared/zustand/globalStore';

const SearchInputUsers = () => {
  // ALL STATE

  // ZUSTAND
  const { searchUser, setSearchUser, setPressedSearchUser } = useGlobalStore();

  useEffect(() => {
    if (!searchUser.length) {
      setPressedSearchUser(false);
    }
  }, [searchUser]);

  return (
    <View className="border border-black flex flex-row justify-between px-3 py-2 rounded-md mt-4">
      <TextInput
        placeholder="Search Users"
        className="basis-3/4"
        value={searchUser}
        onChangeText={(text) => setSearchUser(text)}
        returnKeyType="search"
        onSubmitEditing={(event) => {
          setSearchUser(event.nativeEvent.text.toLowerCase());
          setPressedSearchUser(true);
        }}
      />
      <Feather
        onPress={() => {
          if (searchUser.length > 0) {
            setPressedSearchUser(true);
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

export default SearchInputUsers;
