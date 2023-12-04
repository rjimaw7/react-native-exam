import React, { lazy, Suspense } from 'react';

const Profile = lazy(() => import('./ProfileContainer'));

export const ProfilePage = () => {
  return (
    <Suspense>
      <Profile />
    </Suspense>
  );
};
