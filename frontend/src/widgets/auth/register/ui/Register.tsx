import classes from './Register.module.scss';
import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

interface RegisterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Register: FC<RegisterProps> = (props) => {
  return (
    <div className={classNames(classes.Register, props.className)}>
      REGISTER
    </div>
  );
};
