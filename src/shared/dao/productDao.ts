import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { ICategory, ICategoryResponse } from 'shared/interfaces/ICategory';
import { IProductCreate, IProductCreateResponse } from 'shared/interfaces/ISettings';

const { GET, POST } = useAxios();

export const useProductDao = () => {
  const searchProduct = async (query: string) => {
    const response = await GET<ICategoryResponse>({
      url: `${ENDPOINTS.PRODUCTS.SEARCH}?q=${query}`,
    });
    return response.data;
  };

  const getSingleProduct = async (product: string) => {
    const response = await GET<ICategory>({
      url: `${ENDPOINTS.PRODUCTS.SINGLE_PRODUCT}/${product}`,
    });
    return response.data;
  };

  const createProduct = async (payload: IProductCreate) => {
    const { description, name, price } = payload;

    const response = await POST<IProductCreateResponse, any>({
      url: ENDPOINTS.PRODUCTS.ADD,
      data: { description, name, price },
    });

    return response.data;
  };

  return {
    searchProduct,
    getSingleProduct,
    createProduct,
  };
};
