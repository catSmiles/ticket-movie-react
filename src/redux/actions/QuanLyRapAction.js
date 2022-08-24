import { quanLyRapService } from '~/services/QuanLyRapService';
import { SUCCESSFUL_REQUESTS } from '~/variables';
import { SET_HE_THONG_RAP_CHIEU } from './types/QuanLyRapType';

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      // console.log('lay danh sach he thong rap action: ', result);
      if (result.status === SUCCESSFUL_REQUESTS) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          payload: result.data.content,
        });
      }
    } catch (error) {
      console.log('Error Lay danh sach he thong rap action: ', error);
    }
  };
};
