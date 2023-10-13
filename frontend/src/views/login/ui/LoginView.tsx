import classes from './LoginView.module.scss';
import classNames from 'classnames';
import { FC } from 'react';

interface LoginViewProps {
  className?: string;
}

export const LoginView: FC<LoginViewProps> = (props) => {
  return (
    <div className={classNames(classes.LoginView, props.className)}>
      LOGIN VIEW
    </div>
  );
};
