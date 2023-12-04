import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { ICategoryResponse } from 'shared/interfaces/ICategory';

const { GET } = useAxios();

export const useProductDao = () => {
  const searchProduct = async (query: string) => {
    const response = await GET<ICategoryResponse>({
      url: `${ENDPOINTS.PRODUCTS.SEARCH}?q=${query}`,
    });
    return response.data;
  };

  return {
    searchProduct,
  };
};
