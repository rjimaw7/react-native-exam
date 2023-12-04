import { useQuery } from '@tanstack/react-query';
import { useProfileDao } from 'shared/dao/profileDao';
import { IProfileResponse } from 'shared/interfaces/IProfile';

const { getAllUsers: getAllUsersDao, searchUsers: searchUsersDao } = useProfileDao();

export const useProfileService = () => {
  const getAllUsers = (skip: number) => {
    return useQuery<IProfileResponse, Error>({
      queryKey: ['users_all', skip],
      queryFn: () => getAllUsersDao(skip),
    });
  };

  const searchUsers = (category: string) => {
    return useQuery<IProfileResponse, Error>({
      queryKey: ['single_user'],
      queryFn: () => searchUsersDao(category),
    });
  };

  return {
    getAllUsers,
    searchUsers,
  };
};
