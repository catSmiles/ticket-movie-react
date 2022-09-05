import { quanLyPhimService } from '~/services/QuanLyPhimService';
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from './types/QuanLyPhimType';
import { history } from '~/App';
// import { SUCCESSFUL_REQUESTS } from '~/variables';

export const layDanhSachPhimAction = (tenPhim = '') => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
      dispatch({
        type: SET_DANH_SACH_PHIM,
        payload: result.data.content,
      });
      // console.log('Lay danh sach phim action: ', result);
    } catch (errors) {
      console.log('Errors Lay danh sach phim action: ', errors);
    }
  };
};

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.xoaPhim(maPhim);
      console.log('result xoa phim action: ', result);
      dispatch(layDanhSachPhimAction());
    } catch (error) {
      console.log('Error xoa phim action: ', error);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.themPhimUploadHinh(formData);
      console.log('result themPhimUploadHinhAction: ', result.data.content);
      alert('Thêm phim thành công!');
    } catch (error) {
      console.log('Error themPhimUploadHinhAction: ', error);
    }
  };
};
export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layThongTinPhim(maPhim);
      dispatch({
        type: SET_THONG_TIN_PHIM,
        payload: result.data.content,
      });
      // console.log('result layThongTinPhimAction: ', result);
    } catch (error) {
      console.log('error layThongTinPhimAction: ', error);
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.capNhatPhimUpload(formData);
      alert('Cập nhật phim thành công!');
      dispatch(layDanhSachPhimAction());
      history.push('/admin/films');
      console.log('result capNhatPhimUploadAction: ', result);
    } catch (error) {
      console.log('error capNhatPhimUploadAction: ', error);
    }
  };
};
