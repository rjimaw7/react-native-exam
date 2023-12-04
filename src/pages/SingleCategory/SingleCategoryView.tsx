import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ICategory } from 'shared/interfaces/ICategory';
import SingleCategoryItems from './SingleCategoryItems';

interface Props {
  singleCategoryDataMemo: ICategory[] | undefined;
  singleCategoryDataLoading: boolean;
  singleCategoryDataFetching: boolean;
  total: number | undefined;
}

const SingleCategoryView = ({
  singleCategoryDataLoading,
  singleCategoryDataMemo,
  singleCategoryDataFetching,
  total,
}: Props) => {
  return (
    <View className="mt-2">
      {singleCategoryDataLoading || singleCategoryDataFetching ? (
        <Text>Loading...</Text>
      ) : (
        <View className="">
          <FlatList
            data={singleCategoryDataMemo}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            className="mb-24"
            ListFooterComponent={() => <Text className="text-center">Showing {total} total items</Text>}
            renderItem={({ item }) => <SingleCategoryItems item={item} />}
          />
        </View>
      )}
    </View>
  );
};

export default SingleCategoryView;
