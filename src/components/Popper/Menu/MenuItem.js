import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return <button className={cx('menu-item')}>{data.title}</button>;
}

export default MenuItem;
