import classNames from 'classnames';
import { FC } from 'react';

interface LoginViewProps {
  className?: string;
}

export const LoginView: FC<LoginViewProps> = (props) => {
  return <div className={classNames(props.className)}>LOGIN VIEW</div>;
};
