/* eslint-disable no-useless-constructor */
import { baseService } from './baseService';
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
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
