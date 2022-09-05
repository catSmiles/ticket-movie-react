/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, Button, Input } from 'antd';
import { DeleteOutlined, EditOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { layDanhSachPhimAction, xoaPhimAction } from '~/redux/actions/QuanLyPhimAction';
import { history } from '~/App';

const { Search } = Input;

const onChange = (sorter, onSearch) => {
  console.log('params sorter: ', sorter);
  console.log('params onSearch: ', onSearch);
};

// const handleChangeSearch = (e) => {
//   console.log('Search: ', e.target.value);
// };

function Films() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log('arrFilm: ', arrFilm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      // key: 'name',
      render: (text, film, index) => {
        // console.table(text, film, index);
        return <span>{index + 1}</span>;
      },
      width: '5%',
    },
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend', 'ascend'],
      // key: 'name',
      width: '10%',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film, index, test) => {
        // console.log(text, film, index);
        return (
          <div
            style={{
              width: '50px',
              height: '70px',
              borderRadius: '4px',
              overflow: 'hidden',
              padding: '3px',
              backgroundColor: '#dfdcdc',
            }}
          >
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              style={{
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '4px',
                height: '100%',
              }}
            />
          </div>
        );
      },
      // key: 'address',
      width: '10%',
    },
    {
      title: 'Têm phim',
      dataIndex: 'tenPhim',
      render: (text, film) => {
        return <span className="text-base">{film.tenPhim}</span>;
      },
      sorter: (a, b) => {
        const tenPhimA = a.tenPhim.toLowerCase();
        const tenPhimB = b.tenPhim.toLowerCase();
        if (tenPhimA > tenPhimB) return 1;
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
      // key: 'age',
      width: '15%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      render: (text, film) => {
        return <span className="text-lg">{film.moTa.length > 150 ? film.moTa.slice(0, 150) + '...' : film.moTa}</span>;
      },
      width: '50%',
    },
    {
      title: 'Hành động',
      dataIndex: 'maPhim',
      render: (text, film) => {
        return (
          <>
            {/* Edit */}
            <a href="#" key={1} className="mr-2 text-2xl">
              <EditOutlined style={{ color: 'green' }} />
            </a>
            {/* Deleted */}
            <span
              key={2}
              className="mr-2 text-2xl cursor-pointer"
              onClick={() => {
                let isDeleted = window.confirm(`Bạn có chắc muốn xóa phim ${film.tenPhim}`);
                if (isDeleted) {
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ color: 'red' }} />
            </span>
            <a key={3} className="text-2xl">
              <CalendarOutlined style={{ color: 'blue' }} />
            </a>
          </>
        );
      },
      width: '10%',
    },
  ];

  const onSearch = (value) => {
    console.log(value);
    dispatch(layDanhSachPhimAction(value));
  };

  const data = arrFilm;
  console.log('arrFilm: ', arrFilm);

  return (
    <>
      <h3 className="text-2xl" style={{ color: '#f1b722' }}>
        Quản lý phim
      </h3>
      {/* Add film */}
      <Button
        type="primary"
        className="my-4 text-blue-500 flex items-center"
        onClick={() => {
          history.push('/admin/films/add');
        }}
      >
        <PlusOutlined />
        <span>Thêm phim</span>
      </Button>

      {/* Search feature */}
      <Search
        placeholder="Tìm kiếm phim..."
        allowClear
        className="my-4"
        size="large"
        onSearch={onSearch}
        // onChange={handleChangeSearch}
      />

      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'maPhim'} />
    </>
  );
}

export default Films;
