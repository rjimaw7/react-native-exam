import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ICategory } from 'shared/interfaces/ICategory';
import SingleCategoryItems from './SingleCategoryItems';
import SingleProductSkeleton from 'components/SingleProductSkeleton';

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
        <View className="flex flex-row flex-wrap">
          {Array.from({ length: 4 }, (_, index) => (
            <SingleProductSkeleton key={index} />
          ))}
        </View>
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
