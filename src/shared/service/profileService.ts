import { useQuery } from '@tanstack/react-query';
import { useProfileDao } from 'shared/dao/profileDao';
import { IProfileResponse } from 'shared/interfaces/IProfile';

const { getAllUsers: getAllUsersDao, searchUsers: searchUsersDao } = useProfileDao();

export const useProfileService = () => {
  const getAllUsers = (skip: number, searchUser?: boolean) => {
    return useQuery<IProfileResponse, Error>({
      queryKey: ['users_all', skip],
      queryFn: () => getAllUsersDao(skip),
      // THIS HOOK WILL RUN AS LONG AS THE FLAG IS TRUE
      enabled: searchUser,
    });
  };

  const searchUsers = (category: string, searchUser?: boolean) => {
    return useQuery<IProfileResponse, Error>({
      queryKey: ['single_user'],
      queryFn: () => searchUsersDao(category),
      // THIS HOOK WILL RUN AS LONG AS THE FLAG IS TRUE
      enabled: searchUser,
    });
  };

  return {
    getAllUsers,
    searchUsers,
  };
};
