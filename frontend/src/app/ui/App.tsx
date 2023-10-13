import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from '../router';

export const App = () => {
  return (
    <ConfigProvider>
      <Suspense fallback={<div />}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
};
