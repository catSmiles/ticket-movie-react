/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { dangNhapAction } from '~/redux/actions/QuanLyNguoiDungAction';

import * as Yup from 'yup';

const cx = classNames.bind(styles);
function Login() {
  // console.log('Login component ');
  const dispatch = useDispatch();
  // const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log('userLogin: ', userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(2, 'Tài khoản tối thiểu 2 ký tự')
        .max(15, 'Tài khoản tối đa 15 ký tự')
        .required('Tài khoản là bắt buộc'),
      matKhau: Yup.string()
        .min(2, 'Mật khẩu tối thiểu 2 ký tự')
        .max(15, 'Mật khẩu tối đa 15 ký tự')
        .required('Mật khẩu là bắt buộc'),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const action = dangNhapAction(values);
      dispatch(action);
    },
  });

  return (
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">CyberLearn</div>
          {/* <img src={images.logo} alt="CyberLearn" /> */}
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
  xl:text-bold"
        >
          Đăng nhập
        </h2>
        <div className="mt-12">
          <form onSubmit={formik.handleSubmit}>
            {/* Tai khoan */}
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài Khoản<span className="ml-1 text-red-500">*</span>
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taiKhoan}
                className={cx(
                  'w-full',
                  'text-lg',
                  'py-2',
                  'border-b',
                  'border-gray-300',
                  'focus:outline-none',
                  'focus:border-indigo-500',
                )}
                // type=""
                placeholder="user@gmail.com"
              />
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <span className="text-xs text-red-500">{formik.errors.taiKhoan}</span>
              )}
            </div>
            {/* Mat khau */}
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Mật khẩu<span className="ml-1 text-red-500">*</span>
              </div>
              <input
                // type=""
                name="matKhau"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.matKhau}
                placeholder="Nhập mật khẩu"
                className={cx(
                  'w-full',
                  'text-lg',
                  'py-2',
                  'border-b',
                  'border-gray-300',
                  'focus:outline-none',
                  'focus:border-indigo-500',
                )}
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <span className="text-xs text-red-500">{formik.errors.matKhau}</span>
              )}
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
              shadow-lg"
              >
                Đăng nhập
              </button>
            </div>
          </form>
          {/* <div className="mt-12 text-sm font-semibold text-gray-700 text-center"> */}
          <div className="mt-12 text-sm font-semibold text-gray-700 text-center pb-12">
            Bạn chưa có tài khoản?
            <NavLink to="/register" className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-2">
              Đăng ký
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
