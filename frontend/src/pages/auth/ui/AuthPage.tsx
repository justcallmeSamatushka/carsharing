import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { Login } from '@/features';

interface AuthViewProps extends HTMLAttributes<HTMLDivElement> {}

export const AuthPage: FC<AuthViewProps> = ({ className }) => (
  <Login className={classNames(className)} />
);
