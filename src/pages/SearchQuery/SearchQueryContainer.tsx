import React, { useMemo } from 'react';
import SearchQueryView from './SearchQueryView';
import useGlobalStore from 'shared/zustand/categoryStore';
import { useProductService } from 'shared/service/productService';

const SearchQueryContainer = () => {
  // ALL STATE

  // ZUSTAND GLOBAL STATE
  const { searchQuery } = useGlobalStore();
  // Encode the selectedCategory before passing it to the getSingleCategory function
  const encodedProduct = encodeURIComponent(searchQuery);

  // ALL HOOKS
  const { searchProduct } = useProductService();
  const {
    data: searchProductData,
    isLoading: searchProductDataLoading,
    isFetching: searchProductDataFetching,
  } = searchProduct(encodedProduct);

  const searchProductDataMemo = useMemo(() => searchProductData?.products, [searchProductData?.products]);

  return (
    <SearchQueryView
      searchProductDataMemo={searchProductDataMemo}
      searchProductDataLoading={searchProductDataLoading}
      searchProductDataFetching={searchProductDataFetching}
    />
  );
};

export default SearchQueryContainer;
