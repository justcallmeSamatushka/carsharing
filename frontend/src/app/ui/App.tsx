import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from '../router';
import { LoadingLayout } from '@/shared';

export const App = () => {
  return (
    // TODO: CONFIG PROVIDER
    <ConfigProvider>
      <Suspense fallback={<LoadingLayout />}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
};
