/* eslint-disable no-useless-constructor */
import { baseService } from './baseService';
import { GROUP_ID } from '~/util/settings/config';
class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post('/api/QuanLyNguoiDung/DangNhap', thongTinDangNhap);
  };
  dangKy = (thongTinDangKy) => {
    return this.post('/api/QuanLyNguoiDung/DangKy', thongTinDangKy);
  };
  layThongTinNguoiDung = () => {
    return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
  };
  layDanhSachNguoiDung = (tenNguoiDung = '') => {
    if (tenNguoiDung !== '') {
      return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tenNguoiDung}`);
    }
    return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  };
  themNguoiDung = (thongTinNguoiDung) => {
    return this.post('/api/QuanLyNguoiDung/ThemNguoiDung', thongTinNguoiDung);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
