import classes from './Login.module.scss';
import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

interface LoginProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Login: FC<LoginProps> = (props) => {
  return (
    <div className={classNames(classes.login, props.className)}>LOGIN</div>
  );
};
