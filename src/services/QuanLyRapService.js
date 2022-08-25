/* eslint-disable no-useless-constructor */
import { baseService } from './baseService';
import { GROUP_ID } from '~/util/settings/config';

class QuanLyRapService extends baseService {
  constructor() {
    super();
  }
  layDanhSachHeThongRap = () => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
  };
  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  };
}

export const quanLyRapService = new QuanLyRapService();
