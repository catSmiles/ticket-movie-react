import { quanLyDatVeService } from '~/services/QuanLyDatVeService';
import { SUCCESSFUL_REQUESTS } from '~/variables';
import { ThongTinDatVe } from '~/_core/models/ThongTinDatVe';
import { connection } from '~/index';
import { displayLoadingAction, hideLoadingAction } from './LoadingAction';

import { SET_CHI_TIET_PHONG_VE, DAT_VE, DAT_VE_HOAN_TAT, CHUYEN_TAB } from './types/QuanLyDatVeType';

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      // console.log('result lay chi tiet phong ve action: '.result);
      if (result.status === SUCCESSFUL_REQUESTS) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          payload: result.data.content,
        });
      }
    } catch (error) {
      console.log('error lay chi tiet phong ve action: ', error);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log('result dat ve action: ', result);

      // Đặt vé thành công gọi api load lại phòng vé
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(hideLoadingAction);

      let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
      connection.invoke('datGheThanhCong', userLogin.taiKhoan, thongTinDatVe.maLichChieu);

      dispatch({ type: CHUYEN_TAB });
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log('error dat ve action: ', error.response.data);
    }
  };
};

export const datGheAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    // Dua thong tin ghe len reducer
    await dispatch({
      type: DAT_VE,
      gheDuocChon: ghe,
    });

    // Call api ve backend
    let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;

    let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

    // console.log('danhSachGheDangDat: ', danhSachGheDangDat);
    // console.log('maLichChieu: ', maLichChieu);
    // console.log('taiKhoan: ', taiKhoan);

    // Bien mang thanh chuoi
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

    console.log('danhSachGheDangDat: ', danhSachGheDangDat);
    console.log('maLichChieu: ', maLichChieu);
    console.log('taiKhoan: ', taiKhoan);

    // Call api signalR - ERROR PHIA SEVER
    // connection.invoke('datGhe', taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};
