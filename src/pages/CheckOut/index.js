/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './CheckOut.scss';
import styles from './CheckOut.module.scss';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames/bind';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { ThongTinDatVe } from '~/_core/models/ThongTinDatVe';
import { datVeAction } from '~/redux/actions/QuanLyDatVeAction';
import { connection } from '~/index';
import { layThongTinNguoiDungAction } from '~/redux/actions/QuanLyNguoiDungAction';
import { datGheAction, layChiTietPhongVeAction } from '~/redux/actions/QuanLyDatVeAction';
import { CheckOutlined, CloseOutlined, UserOutlined, SmileOutlined, HomeOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

const { TabPane } = Tabs;

function CheckOut(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();

  // ERROR useEffect khong chay
  useEffect(() => {
    //Gọi hàm tạo ra 1 async function
    const action = layChiTietPhongVeAction(props.match.params.id);
    //Dispatch function này đi
    dispatch(action);

    //Có 1 client nào thực hiện việc đặt vé thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
    connection.on('datVeThanhCong', () => {
      // console.log('datVeThanhCong');
      dispatch(action);
    });

    //Vừa vào trang load tất cả ghế của các người khác đang đặt
    connection.invoke('loadDanhSachGhe', props.match.params.id);

    //Load danh sách ghế đang đặt từ server về (lắng nghe tín hiệu từ server trả về)
    connection.on('loadDanhSachGheDaDat', (dsGheKhachDat) => {
      // console.log('loadDanhSachGheDaDat: ', dsGheKhachDat);
      //Bước 1: Loại mình ra khỏi danh sách
      dsGheKhachDat = dsGheKhachDat.filter((item) => item.taiKhoan !== userLogin.taiKhoan);
      //Bước 2 gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung
      let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);
        return [...result, ...arrGhe];
      }, []);
      //Đưa dữ liệu ghế khách đặt cập nhật redux
      arrGheKhachDat = _.uniqBy(arrGheKhachDat, 'maGhe');
      // console.log('arrGheKhachDat: ', arrGheKhachDat);

      //Đưa dữ liệu ghế khách đặt về redux
      dispatch({
        type: 'DAT_GHE',
        arrGheKhachDat,
      });
    });

    //Cài đặt sự kiện khi reload trang
    window.addEventListener('beforeunload', clearGhe);

    // Cleanup function
    return () => {
      clearGhe();
      window.removeEventListener('beforeunload', clearGhe);
    };
  }, []);

  const clearGhe = function (event) {
    connection.invoke('huyDat', userLogin.taiKhoan, props.match.params.id);
  };

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  // console.log('Danh sach ghe: ', danhSachGhe);
  // console.log('Thong tin phim: ', thongTinPhim);

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';

      // Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDangDat = danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.maGhe === ghe.maGhe);

      // Kiem tra tung ghe render xem co phai ghe khach dat hay khong
      let classGheKhachDat = '';
      let indexGheKhachDat = danhSachGheKhachDat.findIndex((gheKhachDat) => gheKhachDat.maGhe === ghe.maGhe);

      if (indexGheKhachDat !== -1) {
        classGheKhachDat = 'gheKhachDat';
      }

      let classGheDaDuocDat = '';
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat';
      }

      if (indexGheDangDat !== -1) {
        classGheDaDat = 'gheDangDat';
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              const action = datGheAction(ghe, props.match.params.id);
              dispatch(action);
            }}
            disabled={ghe.daDat || classGheKhachDat !== ''}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center`}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat !== '' ? (
                <UserOutlined style={{ fontWeight: 'bold' }} />
              ) : (
                <CloseOutlined style={{ fontWeight: 'bold' }} />
              )
            ) : classGheKhachDat !== '' ? (
              <UserOutlined style={{ fontWeight: 'bold' }} />
            ) : (
              <span>{ghe.stt}</span>
            )}
          </button>
          {index + (1 % 16) === 0 ? <br /> : ''}
        </Fragment>
      );
    });
  };

  return (
    <div className=" min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center">
            <div className="bg-black w-4/5 h-3 rounded"></div>
            <div className={cx('trapezoid')}>{/* <h3 className="mt-3 text-black">Màn hình</h3> */}</div>
            <div className="flex flex-wrap justify-center">{renderSeats()}</div>
          </div>

          <div className="mt-5 flex justify-center">
            {/* <table className=" divide-y divide-gray-200 w-2/3"> */}
            <table className=" divide-y divide-gray-200">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th style={{ minWidth: '140px', textAlign: 'center' }}>Ghế chưa đặt</th>
                  <th style={{ minWidth: '140px', textAlign: 'center' }}>Ghế đang đặt</th>
                  <th style={{ minWidth: '140px', textAlign: 'center' }}>Ghế vip</th>
                  <th style={{ minWidth: '140px', textAlign: 'center' }}>Ghế đã đặt</th>
                  <th style={{ minWidth: '140px', textAlign: 'center' }}>Ghế mình đặt</th>
                  <th style={{ minWidth: '140px', textAlign: 'center' }}>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  {/* 1 */}
                  <td style={{ minWidth: '140px', textAlign: 'center' }}>
                    <button className="ghe">
                      <span></span>
                    </button>
                  </td>
                  {/* 2 */}
                  <td style={{ minWidth: '140px', textAlign: 'center' }}>
                    <button className="ghe gheDangDat">
                      <span></span>
                    </button>
                  </td>
                  {/* 3 */}
                  <td style={{ minWidth: '140px', textAlign: 'center' }}>
                    <button className="ghe gheVip">
                      <span></span>
                    </button>
                  </td>
                  {/* 4 */}
                  <td style={{ minWidth: '140px', textAlign: 'center' }}>
                    {/* <button className="ghe gheDaDat"> */}
                    <button className="ghe" style={{ backgroundColor: 'transparent', border: '1px solid #e4e4e4' }}>
                      <CloseOutlined style={{ color: '#000' }} />
                    </button>
                  </td>
                  {/* 5 */}
                  <td style={{ minWidth: '140px', textAlign: 'center' }}>
                    <button className="ghe gheDaDuocDat">
                      {/* <CheckOutlined /> */}
                      <UserOutlined />
                    </button>
                  </td>
                  {/* 6 */}
                  <td style={{ minWidth: '140px', textAlign: 'center' }}>
                    <button className="ghe gheKhachDat">
                      <UserOutlined />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={cx('col-span-3', 'my-cart')}>
          <h3 className="text-green-400 text-right text-3xl">
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}
            đ
          </h3>
          <hr />
          <h3 className="text-xl mb-2 font-bold">{thongTinPhim?.tenPhim}</h3>
          <p>
            <span style={{ minWidth: '80px', display: 'inline-block' }}>Địa điểm:</span>
            {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p className="my-1">
            <span style={{ minWidth: '80px', display: 'inline-block' }}>Ngày chiếu:</span>
            {thongTinPhim?.ngayChieu}
          </p>
          <p>
            <span style={{ minWidth: '80px', display: 'inline-block' }}>Giờ chiếu:</span>
            {thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div className="flex justify-between items-center">
            <div>
              <span className="text-red-400 text-lg font-bold">Ghế: </span>
              {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                return (
                  <span key={index} className="text-green-500 text-xl mr-1 inline-block">
                    [{gheDD.stt}]
                  </span>
                );
              })}
            </div>
            <div>
              <span className="text-green-800 text-lg">
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
                đ
              </span>
            </div>
          </div>
          <hr />
          <div className="text-base">
            <p>
              <i className="mr-2 mb-1 inline-block" style={{ minWidth: '55px' }}>
                Email :
              </i>
              {userLogin.email}
            </p>
            <p>
              <i className="mr-2 inline-block" style={{ minWidth: '55px' }}>
                Phone :
              </i>
              {/* {userLogin.email} */}
              {userLogin.soDT}
            </p>
          </div>
          <div
            onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              dispatch(datVeAction(thongTinDatVe));
            }}
            className="bg-green-500 text-white text-center py-2 font-semibold text-xl cursor-pointer rounded mt-3"
          >
            Đặt vé
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckOutTab(props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  useEffect(() => {
    return () => {
      dispatch({
        type: 'CHANGE_TAB_ACTIVE',
        number: '1',
      });
    };
  }, []);

  return (
    <section className="p-5 max-w-screen-xl mx-auto">
      <Tabs
        defaultActiveKey="1"
        activeKey={tabActive}
        onChange={(key) => {
          dispatch({
            type: 'CHANGE_TAB_ACTIVE',
            number: key.toString(),
          });
        }}
      >
        <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1">
          <CheckOut {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
      </Tabs>
    </section>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log('thongTinNguoiDung: ', thongTinNguoiDung);
  // const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div
            // className="h-full flex items-center border-gray-200 border p-4 rounded-lg"
            className="h-full border-gray-200 border p-4 rounded-lg"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            }}
          >
            {/* <img
              alt={ticket.tenPhim}
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            /> */}

            <div className="flex-grow">
              <h2 className="font-medium text-xl text-center my-4" style={{ color: '#f1b722' }}>
                {ticket.tenPhim}
              </h2>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Mã vé:
                </span>
                <span>{ticket.maVe}</span>
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Nguời đặt:
                </span>
                <span>{thongTinNguoiDung.hoTen}</span>
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Giá vé:
                </span>
                <span>{ticket.giaVe.toLocaleString()}</span>đ
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Giờ chiếu:
                </span>
                {moment(ticket.ngayDat).format('hh:mm a')}
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Ngày chiếu:
                </span>
                {moment(ticket.ngayDat).format('DD/MM/YYYY')}
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Địa điểm:
                </span>
                {seats.tenHeThongRap}
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Tên rạp:
                </span>
                {seats.tenCumRap}
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Số lượng:
                </span>
                {ticket.danhSachGhe.length}
              </p>
              <p>
                <span className="font-bold inline-block" style={{ minWidth: '80px' }}>
                  Ghế:
                </span>
                {ticket.danhSachGhe.map((ghe, index) => {
                  return (
                    <span className="text-green-500 text-base mr-1" key={index}>
                      [{ghe.tenGhe}]
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container max-w-screen-xl mx-auto mb-10">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-bold mb-2" style={{ color: '#f1b722' }}>
          Lịch sử đặt vé khách hàng
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          <span className="font-bold">
            " Qúy khách vui lòng chụp chụp lại màn hình lịch sử đặt vé để có một trải tốt nhất khi tới rạp "
          </span>
          <i className="block">Chúc quý khách xem phim vui vẻ!</i>
        </p>
      </div>
      <div className="flex flex-wrap -m-2" style={{ minHeight: '200px' }}>
        {renderTicketItem()}
      </div>
    </div>
  );
}

export default CheckOutTab;
