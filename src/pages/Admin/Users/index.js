/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, Button, Input } from 'antd';
import { DeleteOutlined, EditOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { layDanhSachPhimAction, xoaPhimAction } from '~/redux/actions/QuanLyPhimAction';
import { history } from '~/App';
import { NavLink } from 'react-router-dom';
import { layThongTinDanhSachNguoiDungAction } from '~/redux/actions/QuanLyNguoiDungAction';

const { Search } = Input;

// const onChange = (sorter, onSearch) => {
//   console.log('params sorter: ', sorter);
//   console.log('params onSearch: ', onSearch);
// };

function Users() {
  const dispatch = useDispatch();
  const { thongTinDanhSachNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log('thong tin DS nguoi dung: ', thongTinDanhSachNguoiDung);

  useEffect(() => {
    dispatch(layThongTinDanhSachNguoiDungAction());
  }, []);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'stt',
      render: (text, film, index) => {
        return <span>{index + 1}</span>;
      },
      width: '5%',
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
      // sorter: (a, b) => a.maPhim - b.maPhim,
      // sortDirections: ['descend', 'ascend'],
      width: '15%',
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'matKhau',
      width: '15%',
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      // render: (text, film) => {
      //   return <span className="text-base">{film.tenPhim}</span>;
      // },
      // sorter: (a, b) => {
      //   const tenPhimA = a.tenPhim.toLowerCase();
      //   const tenPhimB = b.tenPhim.toLowerCase();
      //   if (tenPhimA > tenPhimB) return 1;
      //   return -1;
      // },
      // sortDirections: ['descend', 'ascend'],
      width: '15%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      // render: (text, film) => {
      //   return <span className="text-lg">{film.moTa.length > 150 ? film.moTa.slice(0, 150) + '...' : film.moTa}</span>;
      // },
      width: '25%',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDt',
      // render: (text, film) => {
      //   return (
      //     <>
      //       {/* Edit */}
      //       <NavLink to={`/admin/films/edit/${film.maPhim}`} key={1} className="mr-2 text-2xl">
      //         <EditOutlined style={{ color: 'green' }} />
      //       </NavLink>
      //       {/* Deleted */}
      //       <span
      //         key={2}
      //         className="mr-2 text-2xl cursor-pointer"
      //         onClick={() => {
      //           let isDeleted = window.confirm(`Bạn có chắc muốn xóa phim ${film.tenPhim}`);
      //           if (isDeleted) {
      //             dispatch(xoaPhimAction(film.maPhim));
      //           }
      //         }}
      //       >
      //         <DeleteOutlined style={{ color: 'red' }} />
      //       </span>
      //       {/* Tạo lịch chiếu */}
      //       <NavLink to={`/admin/films/showtime/${film.maPhim}`} key={3} className="text-2xl">
      //         <CalendarOutlined style={{ color: 'blue' }} />
      //       </NavLink>
      //     </>
      //   );
      // },
      width: '15%',
    },
    {
      title: 'Hành động',
      dataIndex: 'taiKhoan',
      render: (text, user) => {
        return (
          <>
            {/* Edit */}
            <a href="#" key={1} className="mr-2 text-2xl">
              <EditOutlined style={{ color: 'green' }} />
            </a>
            {/* Deleted */}
            <span key={2} className="mr-2 text-2xl cursor-pointer">
              <DeleteOutlined style={{ color: 'red' }} />
            </span>
            {/* Tạo lịch chiếu */}
            <a href="#" key={3} className="text-2xl">
              <CalendarOutlined style={{ color: 'blue' }} />
            </a>
          </>
        );
      },
      width: '10%',
    },
  ];

  const onSearch = (value) => {
    // console.log('data search: ', value);
    dispatch(layThongTinDanhSachNguoiDungAction(value));
  };

  const onChange = (onSearch) => {
    console.log('onSearch: ', onSearch);
  };

  const data = thongTinDanhSachNguoiDung;

  return (
    <>
      <h3 className="text-2xl" style={{ color: '#f1b722' }}>
        Quản trị người dùng
      </h3>
      {/* Add user */}
      <Button
        type="primary"
        className="my-4 text-blue-500 flex items-center"
        onClick={() => {
          history.push('/admin/users/add');
        }}
      >
        <PlusOutlined />
        <span>Thêm thành viên</span>
      </Button>

      {/* Search feature */}
      <Search
        placeholder="Tìm kiếm user..."
        allowClear
        className="my-4"
        size="large"
        onSearch={onSearch}
        // onChange={handleChangeSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'taiKhoan'} />
    </>
  );
}

export default Users;

// const handleChangeSearch = (e) => {
//   console.log('Search: ', e.target.value);
// };
