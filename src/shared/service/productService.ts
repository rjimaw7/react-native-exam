import { useQuery } from '@tanstack/react-query';
import { useProductDao } from 'shared/dao/productDao';
import { ICategory, ICategoryResponse } from 'shared/interfaces/ICategory';

const { searchProduct: searchProductDao, getSingleProduct: getSingleProductDao } = useProductDao();

export const useProductService = () => {
  const searchProduct = (query: string) => {
    return useQuery<ICategoryResponse, Error>({
      queryKey: ['product_search'],
      queryFn: () => searchProductDao(query),
    });
  };

  const getSingleProduct = (product: string) => {
    return useQuery<ICategory, Error>({
      queryKey: ['single_product'],
      queryFn: () => getSingleProductDao(product),
    });
  };

  return {
    searchProduct,
    getSingleProduct,
  };
};
