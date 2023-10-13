import classes from './Home.module.scss';
import classNames from 'classnames';
import { FC } from 'react';

interface HomeProps {
  className?: string;
}

export const HomeView: FC<HomeProps> = (props) => {
  return <div className={classNames(classes.Home, props.className)}></div>;
};
