import { TOKEN, USER_LOGIN } from '~/util/settings/config';
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG_TU_DANH_SACH_NGUOI_DUNG,
} from '../actions/types/QuanLyNguoiDungType';

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

// console.log('user: ', user);
const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
  thongTinDanhSachNguoiDung: [],
  thongTinNguoiDungTuDanhSachNguoiDung: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION:
      console.log('state: ', state);
      console.log('action: ', action);
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
      localStorage.setItem(TOKEN, action.payload.accessToken);
      return { ...state, userLogin: action.payload };
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.payload;
      return { ...state };
    }
    case SET_THONG_TIN_DANH_SACH_NGUOI_DUNG: {
      state.thongTinDanhSachNguoiDung = action.payload;
      return { ...state };
    }
    case SET_THONG_TIN_NGUOI_DUNG_TU_DANH_SACH_NGUOI_DUNG: {
      state.thongTinNguoiDungTuDanhSachNguoiDung = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
