import React, { useMemo, useState } from 'react';
import ProfileView from './ProfileView';
import { useProfileService } from 'shared/service/profileService';

const ProfileContainer = () => {
  // ALL STATE
  const [skip, setSkip] = useState(0);

  // ALL HOOKS
  const { getAllUsers } = useProfileService();

  const { data: userData, isLoading: userDataLoading } = getAllUsers(skip);

  const userDataMemo = useMemo(() => userData?.users, [userData?.users]);

  return <ProfileView userDataMemo={userDataMemo} userDataLoading={userDataLoading} setSkip={setSkip} skip={skip} />;
};

export default ProfileContainer;
