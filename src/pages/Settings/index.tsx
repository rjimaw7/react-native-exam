import React, { lazy, Suspense } from 'react';

const Settings = lazy(() => import('./SettingsContainer'));

export const SettingsPage = () => {
  return (
    <Suspense>
      <Settings />
    </Suspense>
  );
};
