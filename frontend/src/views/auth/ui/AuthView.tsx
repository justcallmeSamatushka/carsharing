import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { Login } from '@/widgets';

interface AuthViewProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const AuthView: FC<AuthViewProps> = (props) => {
  return <Login className={classNames(props.className)} />;
};
