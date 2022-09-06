import { Redirect, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, DesktopOutlined, FileOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminTemplate.module.scss';
import './AdminTemplate.scss';
import images from '~/assets/images';
import { history } from '~/App';
import { TOKEN, USER_LOGIN } from '~/util/settings/config';

// Tippy libary
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function AdminTemplate({ Component, ...restProps }) {
  const [collapsed, swtCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    swtCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  // Login feature
  if (userLogin.maLoaiNguoiDung !== 'QuanTri' || !localStorage.getItem(USER_LOGIN)) {
    alert('Oop! Bạn không có quyền truy cập vào trang này!');
    return <Redirect to="/" />;
  }
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

    // return (
    //   <NavLink to="/login" className={cx('action-btn')}>
    //     Đăng nhập
    //   </NavLink>
    // );
  };

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div className="logo p-5">
                <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="logo" />
              </div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<FileOutlined />}>
                  <NavLink to="/admin">Dashboard</NavLink>
                </Menu.Item>
                <SubMenu key="sub-films" icon={<FileOutlined />} title="Films">
                  <Menu.Item key="sub-films-1" icon={<FileOutlined />}>
                    <NavLink to="/admin/films">Films</NavLink>
                  </Menu.Item>
                  <Menu.Item key="sub-films-2" icon={<FileOutlined />}>
                    <NavLink to="/admin/films/add">Add new</NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub-users" icon={<UserOutlined />} title="Users">
                  <Menu.Item key="sub-users-show" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Users</NavLink>
                  </Menu.Item>
                  <Menu.Item key="sub-users-add" icon={<UserOutlined />}>
                    <NavLink to="/admin/users/add">Add User</NavLink>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background custom-ant-layout-header flex justify-end items-center"
                style={{ padding: 0 }}
              >
                <div className={cx('group-action')}>{renderLogin()}</div>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                  <Component {...propsRoute} />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}

export default AdminTemplate;
