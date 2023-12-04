import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import RouterView from 'router/RouterView';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterView />
    </QueryClientProvider>
  );
};

export default App;
