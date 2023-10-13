import { ConfigProvider as Config } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { FC } from 'react';

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  return <Config {...props}>{props.children}</Config>;
};
