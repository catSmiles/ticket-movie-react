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
}

export const quanLyPhimService = new QuanLyPhimService();
