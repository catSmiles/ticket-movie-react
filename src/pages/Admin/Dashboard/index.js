import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

function Dashboard() {
  return (
    <div className={cx('wrapper')}>
      <img src={images.dashboard} alt="dashboard" />
    </div>
  );
}

export default Dashboard;
