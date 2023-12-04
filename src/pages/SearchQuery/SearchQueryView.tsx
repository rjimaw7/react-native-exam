/* eslint-disable no-nested-ternary */
import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ICategory } from 'shared/interfaces/ICategory';
import SingleCategoryItems from 'pages/SingleCategory/SingleCategoryItems';
import SingleProductSkeleton from 'components/SingleProductSkeleton';

interface Props {
  searchProductDataMemo: ICategory[] | undefined;
  searchProductDataLoading: boolean;
  searchProductDataFetching: boolean;
}

const SearchQueryView = ({ searchProductDataMemo, searchProductDataFetching, searchProductDataLoading }: Props) => {
  return (
    <View className="mt-2">
      {searchProductDataLoading || searchProductDataFetching ? (
        Array.from({ length: 4 }, (_, index) => <SingleProductSkeleton key={index} />)
      ) : searchProductDataMemo && searchProductDataMemo.length > 0 ? (
        <View className="">
          <FlatList
            data={searchProductDataMemo}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            className="mb-24"
            renderItem={({ item }) => <SingleCategoryItems item={item} />}
          />
        </View>
      ) : (
        <Text className="text-gray-400">No Products Found</Text>
      )}
    </View>
  );
};

export default SearchQueryView;
