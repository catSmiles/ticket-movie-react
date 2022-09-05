/* eslint-disable no-useless-constructor */
import { baseService } from './baseService';
import { GROUP_ID } from '~/util/settings/config';

class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }
  layDanhSachPhim = (tenPhim = '') => {
    if (tenPhim !== '') return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`);
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };
  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
  themPhimUploadHinh = (formData) => {
    return this.post('/api/QuanLyPhim/ThemPhimUploadHinh', formData);
  };
}

export const quanLyPhimService = new QuanLyPhimService();
