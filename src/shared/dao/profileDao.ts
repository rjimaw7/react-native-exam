import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { IProfileResponse } from 'shared/interfaces/IProfile';

const { GET } = useAxios();

export const useProfileDao = () => {
  const getAllUsers = async (skip: number) => {
    const response = await GET<IProfileResponse>({
      url: `${ENDPOINTS.USERS.ALL}?limit=5&skip=${skip}`,
    });
    return response.data;
  };

  const searchUsers = async (user: string) => {
    const response = await GET<IProfileResponse>({
      url: `${ENDPOINTS.USERS.SEARCH_USER}?q=${user}`,
    });
    return response.data;
  };

  return {
    getAllUsers,
    searchUsers,
  };
};
