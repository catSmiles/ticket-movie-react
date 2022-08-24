import { quanLyPhimService } from '~/services/QuanLyPhimService';
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType';
import { SUCCESSFUL_REQUESTS } from '~/variables';

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
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
