/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
console.log(images);

const cx = classNames.bind(styles);

function Header(props) {
  console.log('Header props: ', props);
  return (
    <header className={cx('wrapper')}>
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          // className="flex items-center p-2"
          className="p-2"
        >
          <img src={images.logo} alt="cyberlean" />
        </a>
        {/* Navs */}
        <ul className="items-stretch hidden space-x-3 lg:flex h-full">
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className={cx('nav-link', 'active')}>
              Home
            </a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className={cx('nav-link')}>
              Contact
            </a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className={cx('nav-link')}>
              News
            </a>
          </li>
          {/* css origin */}
          {/* <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </a>
          </li> */}
        </ul>
        {/* Action */}
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {/* css origin */}
          {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
          <button className={cx('action-btn')}>Đăng nhập</button>
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
