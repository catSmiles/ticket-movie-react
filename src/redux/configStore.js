import { applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer';
import { LoadingRender } from './reducers/LoadingReducer';
const rootReducer = combineReducers({
  // states ứng dụng
  QuanLyNguoiDungReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyDatVeReducer,
  LoadingRender,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
