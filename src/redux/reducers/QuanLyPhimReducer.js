import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from '../actions/types/QuanLyPhimType';
import { SET_CHI_TIET_PHIM } from '../actions/types/QuanLyRapType';

const stateDefault = {
  arrFilm: [],
  filmDetail: {},
  infoFilm: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM:
      state.arrFilm = action.payload;
      // console.log('state.arrFilm: ', state.arrFilm);
      return { ...state };
    case SET_CHI_TIET_PHIM:
      state.filmDetail = action.payload;
      // console.log('FilmDetail at Quan ly phim: ', state);
      return { ...state };

    case SET_THONG_TIN_PHIM: {
      state.infoFilm = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
