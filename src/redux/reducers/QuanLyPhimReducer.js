import { SET_DANH_SACH_PHIM } from '../actions/types/QuanLyPhimType';

const stateDefault = {
  arrFilm: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM:
      state.arrFilm = action.payload;
      // console.log('state.arrFilm: ', state.arrFilm);
      return { ...state };

    default:
      return { ...state };
  }
};
