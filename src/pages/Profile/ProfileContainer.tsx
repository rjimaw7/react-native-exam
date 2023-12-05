import React, { useMemo, useState } from 'react';
import ProfileView from './ProfileView';
import { useProfileService } from 'shared/service/profileService';
import useGlobalStore from 'shared/zustand/globalStore';

const ProfileContainer = () => {
  // ALL STATE
  const [skip, setSkip] = useState(0);

  // ZUSTAND
  const { searchUser, pressedSearchUser } = useGlobalStore();

  // ALL HOOKS
  const { getAllUsers, searchUsers } = useProfileService();

  // THIS HOOK WILL RUN AS DEFAULT
  const { data: userData, isLoading: userDataLoading } = getAllUsers(skip, !pressedSearchUser);
  // THIS HOOK WILL RUN WHEN USER SEARCH THE INPUT
  const { data: searchData, isLoading: searchDataLoading } = searchUsers(searchUser, pressedSearchUser);

  const userDataMemo = useMemo(() => userData?.users, [userData?.users]);
  const searchDataMemo = useMemo(() => searchData?.users, [searchData?.users]);

  return (
    <ProfileView
      displayData={pressedSearchUser ? searchDataMemo : userDataMemo}
      displayDataLoading={pressedSearchUser ? searchDataLoading : userDataLoading}
      setSkip={setSkip}
      skip={skip}
    />
  );
};

export default ProfileContainer;
