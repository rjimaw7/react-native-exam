import React, { useMemo } from 'react';
import SingleCategoryView from './SingleCategoryView';
import { useCategoriesService } from 'shared/service/categoriesService';
import useGlobalStore from 'shared/zustand/categoryStore';

const SingleCategoryContainer = () => {
  // ALL STATE

  // ZUSTAND GLOBAL STATE
  const { selectedCategory } = useGlobalStore();
  // Encode the selectedCategory before passing it to the getSingleCategory function
  const encodedCategory = encodeURIComponent(selectedCategory);

  // ALL HOOKS
  const { getSingleCategory } = useCategoriesService();
  const {
    data: singleCategoryData,
    isLoading: singleCategoryDataLoading,
    isFetching: singleCategoryDataFetching,
  } = getSingleCategory(encodedCategory);

  const singleCategoryDataMemo = useMemo(() => singleCategoryData?.products, [singleCategoryData?.products]);

  return (
    <SingleCategoryView
      singleCategoryDataMemo={singleCategoryDataMemo}
      singleCategoryDataLoading={singleCategoryDataLoading}
      singleCategoryDataFetching={singleCategoryDataFetching}
      total={singleCategoryData?.total}
    />
  );
};

export default SingleCategoryContainer;
