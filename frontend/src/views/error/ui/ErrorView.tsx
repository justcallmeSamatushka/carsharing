import classes from './Error.module.scss';
import classNames from 'classnames';
import { FC } from 'react';

interface ErrorProps {
  className?: string;
}

export const ErrorView: FC<ErrorProps> = (props) => {
  return (
    <div className={classNames(classes.Error, props.className)}>
      ERROR__VIEW
    </div>
  );
};
