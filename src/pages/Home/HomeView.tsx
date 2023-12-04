/* eslint-disable react/no-array-index-key */
import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import Category from './components/Category';

interface Props {
  categoryDataMemo: string[] | undefined;
  categoryDataLoading: boolean;
}

const HomeView = ({ categoryDataLoading, categoryDataMemo }: Props) => {
  return (
    <View>
      {categoryDataLoading ? (
        <Text>Loading..</Text>
      ) : (
        <ScrollView className="mb-32">
          {categoryDataMemo && categoryDataMemo.map((text, index) => <Category text={text} key={index} />)}
        </ScrollView>
      )}
    </View>
  );
};

export default HomeView;