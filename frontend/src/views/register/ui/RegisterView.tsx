import classes from './RegisterView.module.scss';
import classNames from 'classnames';
import { FC } from 'react';

interface RegisterViewProps {
  className?: string;
}

export const RegisterView: FC<RegisterViewProps> = (props) => {
  return (
    <div className={classNames(classes.RegisterView, props.className)}></div>
  );
};
