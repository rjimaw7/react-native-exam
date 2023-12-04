import { useMutation, useQuery } from '@tanstack/react-query';
import { useProductDao } from 'shared/dao/productDao';
import { ICategory, ICategoryResponse } from 'shared/interfaces/ICategory';
import { IProductCreate } from 'shared/interfaces/ISettings';

const {
  searchProduct: searchProductDao,
  getSingleProduct: getSingleProductDao,
  createProduct: createProductDao,
} = useProductDao();

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

  const createProduct = useMutation({
    mutationFn: (payload: IProductCreate) => createProductDao(payload),
  });

  const createProductMutation = () => {
    return {
      createProduct,
    };
  };

  return {
    searchProduct,
    getSingleProduct,
    createProductMutation,
  };
};
