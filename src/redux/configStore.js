import { applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';
const rootReducer = combineReducers({
  // states ứng dụng
  QuanLyNguoiDungReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
