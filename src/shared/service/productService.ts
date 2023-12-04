import { useQuery } from '@tanstack/react-query';
import { useProductDao } from 'shared/dao/productDao';
import { ICategoryResponse } from 'shared/interfaces/ICategory';

const { searchProduct: searchProductDao } = useProductDao();

export const useProductService = () => {
  const searchProduct = (query: string) => {
    return useQuery<ICategoryResponse, Error>({
      queryKey: ['product_search'],
      queryFn: () => searchProductDao(query),
    });
  };

  return {
    searchProduct,
  };
};
