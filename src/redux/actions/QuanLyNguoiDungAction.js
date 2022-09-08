import { quanLyNguoiDungService } from '~/services/QuanLyNguoiDungService';
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG_TU_DANH_SACH_NGUOI_DUNG,
} from './types/QuanLyNguoiDungType';
import { SUCCESSFUL_REQUESTS } from '~/variables';
import { history } from '~/App';
// import { Redirect } from 'react-router-dom';

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.data.statusCode === SUCCESSFUL_REQUESTS) {
        console.log('Dang nhap action result: ', result);
        dispatch({
          type: DANG_NHAP_ACTION,
          payload: result.data.content,
        });
        if (result.data.content.maLoaiNguoiDung === 'QuanTri') {
          alert('Hello Admin');
          // go to admin admin template
          history.push('/admin');
        } else if (result.data.content.maLoaiNguoiDung === 'KhachHang') {
          history.push('/');
        }

        // alert('Dang nhap thanh cong');
        // Chuyen huong ve trang truoc do
        // history.goBack();
      }
    } catch (error) {
      alert(JSON.stringify(error.response.data.content));
      console.log('dangNhapAction error: ', error.response.data);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      alert('Dang ky thanh cong!');
      console.log('Dang ky result: ', result);
      history.push('/login');
    } catch (error) {
      alert(JSON.stringify(error, null, 2));
    }
  };
};

// export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      // console.log('result lay thong tin nguoi dung action: ', result);
      if (result.data.statusCode === SUCCESSFUL_REQUESTS) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          payload: result.data.content,
        });
      }
    } catch (error) {
      console.log('Error lay thong tin nguoi dung action: ', error);
    }
  };
};
export const layThongTinDanhSachNguoiDungAction = (tenNguoiDung = '') => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(tenNguoiDung);
      if (result.data.statusCode === SUCCESSFUL_REQUESTS) {
        dispatch({
          type: SET_THONG_TIN_DANH_SACH_NGUOI_DUNG,
          payload: result.data.content,
        });
      }
      console.log('result lay thong tin danh sach nguoi dung action: ', result);
    } catch (error) {
      console.log('error lay thong tin danh sach nguoi dung action: ', error);
    }
  };
};

export const themNguoiDungAction = (thongTinNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.themNguoiDung(thongTinNguoiDung);
      if (result.data.statusCode === SUCCESSFUL_REQUESTS) {
        alert('Thêm người dùng thành công');
      }
    } catch (error) {
      console.log('error them nguoi dung action: ', error);
    }
  };
};

export const layThongTinNguoiDungTuDanhSachNguoiDungAction = (taiKhoan = '') => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDungTuDanhSachNguoiDung(taiKhoan);
      if (result.data.statusCode === SUCCESSFUL_REQUESTS) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG_TU_DANH_SACH_NGUOI_DUNG,
          payload: result.data.content[0],
        });
      }
    } catch (error) {
      console.log('error lay thong tin nguoi dung tu danh sach nguoi dung: ', error);
    }
  };
};

export const capNhatThongTinNguoiDungAction = (thongTinNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinNguoiDung);
      if (result.data.statusCode === SUCCESSFUL_REQUESTS) {
        alert('Cập nhật thông tin người dùng thành công');
        history.push('/admin/users');
      }
    } catch (error) {
      console.log('error cap nhat thong tin nguoi dung action: ', error);
    }
  };
};
