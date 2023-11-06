import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import classes from './index.module.scss';

interface RegisterProps extends HTMLAttributes<HTMLDivElement> {}

export const Register: FC<RegisterProps> = ({ className }) => (
  <div className={classNames(classes.Register, className)}>
    REGISTER
  </div>
);
