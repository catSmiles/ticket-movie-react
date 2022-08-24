import { quanLyNguoiDungService } from '~/services/QuanLyNguoiDungService';
import { DANG_NHAP_ACTION } from './types/QuanLyNguoiDungType';
import { SUCCESSFUL_REQUESTS } from '~/variables';
import { history } from '~/App';

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
        }
        // alert('Dang nhap thanh cong');
        // Chuyen huong ve trang truoc do
        // history.goBack();
        history.push('/');
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