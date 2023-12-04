import React, { useMemo } from 'react';
import HomeView from './HomeView';
import { useCategoriesService } from 'shared/service/categoriesService';

const HomeContainer = () => {
  // ALL STATE

  // ALL HOOKS
  const { getAllCategories } = useCategoriesService();
  const { data: categoryData, isLoading: categoryDataLoading } = getAllCategories();

  const categoryDataMemo = useMemo(() => categoryData, [categoryData]);

  return <HomeView categoryDataMemo={categoryDataMemo} categoryDataLoading={categoryDataLoading} />;
};

export default HomeContainer;
