import { Layout, Spin } from 'antd';
import { FC } from 'react';

export const LoadingLayout: FC = () => {
  return (
    <Layout>
      <Spin size="large" />
    </Layout>
  );
};
