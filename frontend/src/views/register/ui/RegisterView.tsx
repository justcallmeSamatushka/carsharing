import classNames from 'classnames';
import { FC } from 'react';

interface RegisterViewProps {
  className?: string;
}

export const RegisterView: FC<RegisterViewProps> = (props) => {
  return <div className={classNames(props.className)}></div>;
};
