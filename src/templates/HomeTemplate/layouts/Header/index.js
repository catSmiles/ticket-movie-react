/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { history } from '~/App';
import { TOKEN, USER_LOGIN } from '~/util/settings/config';

// Tippy libary
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Header(props) {
  // let isUser = true;
  // isUser = false;
  // console.log('Header props: ', props);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log('userLogin: ', userLogin);
  const renderLogin = () => {
    const isUerLogin = Object.keys(userLogin).length === 0 && userLogin.constructor === Object;
    if (!isUerLogin) {
      // return <img className={cx('avatar')} src={images.avatar} alt={userLogin.hoTen} />;
      return (
        <Tippy
          interactive
          // visible
          placement="bottom-end"
          render={(attrs) => (
            <div className={cx('menu-wrapper')}>
              {/* User */}
              <div className={cx('user-wrapper')}>
                <img className={cx('user-avatar')} src={images.avatar} alt={userLogin.hoTen} />
                <div className={cx('user-info')}>
                  <div className={cx('user-name')}>{userLogin.hoTen}</div>
                  <div className={cx('user-nickname')}>@{userLogin.taiKhoan}</div>
                </div>
              </div>
              <hr />
              {/* Action */}
              <button
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  history.push('/');
                  window.location.reload();
                }}
                className={cx('menu-item')}
                tabIndex="-1"
                {...attrs}
              >
                Đăng xuất
              </button>
            </div>
          )}
        >
          <img className={cx('avatar')} src={images.avatar} alt={userLogin.hoTen} />
        </Tippy>
        // <Menu items={MENU_ITEMS}>
        //   <img className={cx('avatar')} src={images.avatar} alt={userLogin.hoTen} />
        // </Menu>
      );
    }

    return (
      <NavLink to="/login" className={cx('action-btn')}>
        Đăng nhập
      </NavLink>
    );
  };

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
        <div className={cx('hidden', 'lg:flex', 'group-action', 'justify-end')}>{renderLogin()}</div>
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

//   {/* Action */}
//   <div className={cx('hidden', 'lg:flex', 'group-action')}>
//   {/* css origin */}
//   {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
//   {isUser ? (
//     <span className={cx('user')}>Nguyen Hoang Minh Mang</span>
//   ) : (
//     // <button className={cx('action-btn')}>Đăng nhập</button>
//     <NavLink to="/login" className={cx('action-btn')}>
//       Đăng nhập
//     </NavLink>
//   )}
// </div>
