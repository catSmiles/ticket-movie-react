/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { NavLink } from 'react-router-dom';
console.log(images);

const cx = classNames.bind(styles);

function Header(props) {
  let isUser = true;
  isUser = false;
  console.log('Header props: ', props);
  return (
    <header className={cx('wrapper')}>
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <NavLink to="/" aria-label="Back to homepage" className="p-2">
          <img src={images.logo} alt="cyberlean" />
        </NavLink>
        {/* Navs */}
        <ul className="items-stretch hidden space-x-3 lg:flex h-full">
          <li className={cx('nav-item')}>
            <NavLink to="/" exact activeClassName={cx('current')}>
              Home
            </NavLink>
          </li>
          <li className={cx('nav-item')}>
            <NavLink to="/contact" activeClassName={cx('current')}>
              Contact
            </NavLink>
          </li>
          <li className={cx('nav-item')}>
            <NavLink to="/news" activeClassName={cx('current')}>
              News
            </NavLink>
          </li>
        </ul>
        {/* Action */}
        <div className={cx('hidden', 'lg:flex', 'group-action')}>
          {/* css origin */}
          {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
          {isUser ? (
            <span className={cx('user')}>Nguyen Hoang Minh Mang</span>
          ) : (
            // <button className={cx('action-btn')}>Đăng nhập</button>
            <NavLink to="/login" className={cx('action-btn')}>
              Đăng nhập
            </NavLink>
          )}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            // className="w-6 h-6 text-gray-800"
            className={cx('bars-icon')}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
