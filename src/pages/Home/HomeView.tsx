/* eslint-disable react/no-array-index-key */
import { View, ScrollView } from 'react-native';
import React from 'react';
import Category from './components/Category';
import HomeSkeleton from 'components/HomeSkeleton';

interface Props {
  categoryDataMemo: string[] | undefined;
  categoryDataLoading: boolean;
}

const HomeView = ({ categoryDataLoading, categoryDataMemo }: Props) => {
  return (
    <View>
      {categoryDataLoading ? (
        <View className="flex flex-row flex-wrap">
          {Array.from({ length: 10 }, (_, index) => (
            <HomeSkeleton key={index} />
          ))}
        </View>
      ) : (
        <ScrollView className="mb-32">
          <View className="flex flex-row flex-wrap">
            {categoryDataMemo && categoryDataMemo.map((text, index) => <Category text={text} key={index} />)}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default HomeView;
