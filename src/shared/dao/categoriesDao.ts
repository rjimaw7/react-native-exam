import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { ICategoryResponse } from 'shared/interfaces/ICategory';

const { GET } = useAxios();

export const useCategoriesDao = () => {
  const getAllCategories = async () => {
    const response = await GET<string[]>({
      url: ENDPOINTS.CATEGORIES.ALL,
    });
    return response.data;
  };

  const getSingleCategory = async (category: string) => {
    const response = await GET<ICategoryResponse>({
      url: `${ENDPOINTS.CATEGORIES.SINGE_CATEGORY}/${category}`,
    });
    return response.data;
  };

  return {
    getAllCategories,
    getSingleCategory,
  };
};
