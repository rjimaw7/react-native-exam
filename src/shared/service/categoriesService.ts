import { useQuery } from '@tanstack/react-query';
import { useCategoriesDao } from 'shared/dao/categoriesDao';
import { ICategoryResponse } from 'shared/interfaces/ICategory';

const { getAllCategories: getAllCategoriesDao, getSingleCategory: getSingleCategoryDao } = useCategoriesDao();

export const useCategoriesService = () => {
  const getAllCategories = () => {
    return useQuery<string[], Error>({
      queryKey: ['categories_all'],
      queryFn: () => getAllCategoriesDao(),
    });
  };

  const getSingleCategory = (category: string) => {
    return useQuery<ICategoryResponse, Error>({
      queryKey: ['category_single'],
      queryFn: () => getSingleCategoryDao(category),
    });
  };

  return {
    getAllCategories,
    getSingleCategory,
  };
};
