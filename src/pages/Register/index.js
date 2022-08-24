/* eslint-disable jsx-a11y/anchor-is-valid */

import { useDispatch } from 'react-redux';
import { dangKyAction } from '~/redux/actions/QuanLyNguoiDungAction';

import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      hoTen: '',
      taiKhoan: '',
      soDt: '',
      email: '',
      maNhom: '',
      matKhau: '',
      xacNhanMatKhau: '',
    },
    validationSchema: Yup.object({
      hoTen: Yup.string()
        .min(2, 'Họ tên tối thiểu 2 ký tự')
        .max(15, 'Họ tên tối đa 15 ký tự')
        .required('Họ tên là bắt buộc')
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/,
          'Họ tên không hợp lệ, chỉ được chứa ký tự là chữ',
        ),
      taiKhoan: Yup.string()
        .min(2, 'Tài khoản tối thiểu 2 ký tự')
        .max(15, 'Tài khoản tối đa 15 ký tự')
        .required('Tài khoản là bắt buộc'),
      soDt: Yup.string()
        .min(10, 'Số điện thoại gồm 10 chữ số')
        .max(10, 'Số điện thoại gồm 10 chữ số')
        .matches(/^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại là bắt buộc'),
      email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
      maNhom: Yup.string()
        .required('Mã nhóm là bắt buộc')
        .matches(/^GP0[1,2,3,4]$/, 'Mã nhóm không hợp lệ'),
      matKhau: Yup.string()
        .min(8, 'Mật khẩu tối thiểu 8 ký tự')
        .max(15, 'Mật khẩu tối đa 15 ký tự')
        .required('Mật khẩu là bắt buộc')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Mật khẩu phải chứa ít nhất 1 ký tự chữ thường, 1 chữ in hoa, 1 số và 1 ký tự đặt biệt',
        ),
      xacNhanMatKhau: Yup.string()
        .oneOf([Yup.ref('matKhau')], 'Mật khẩu không khớp')
        .required('Xác nhận mật khẩu là bắt buộc'),
    }),
    onSubmit: (values) => {
      const { xacNhanMatKhau, ...restValues } = values;
      console.log(restValues);
      // alert(JSON.stringify(restValues, null, 2));
      const action = dangKyAction(restValues);
      dispatch(action);
    },
  });
  return (
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="py-8 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">CyberLearn</div>
          {/* <img src={images.logo} alt="CyberLearn" /> */}
        </div>
      </div>
      <div className="mt-4 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold"
        >
          Đăng ký
        </h2>
        <div className="mt-4">
          <form onSubmit={formik.handleSubmit}>
            {/* Ho ten */}
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Họ tên<span className="ml-1 text-red-500">*</span>
              </div>
              <input
                name="hoTen"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hoTen}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Họ và tên"
              />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <span className="text-xs text-red-500">{formik.errors.hoTen}</span>
              )}
            </div>
            {/* Tai khoan */}
            <div className="mt-6">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài khoản<span className="ml-1 text-red-500">*</span>
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taiKhoan}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Tài khoản"
              />
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <span className="text-xs text-red-500">{formik.errors.taiKhoan}</span>
              )}
              <span className="text-xs text-red-500"></span>
            </div>
            {/* So dien thoai */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Số điện thoại<span className="ml-1 text-red-500">*</span>
                </div>
              </div>
              <input
                name="soDt"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.soDt}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="0xxx-xxx-xxx"
              />
              {formik.errors.soDt && formik.touched.soDt && (
                <span className="text-xs text-red-500">{formik.errors.soDt}</span>
              )}
            </div>

            {/* email */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email<span className="ml-1 text-red-500">*</span>
                </div>
              </div>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="user@gmail.com"
              />
              {formik.errors.email && formik.touched.email && (
                <span className="text-xs text-red-500">{formik.errors.email}</span>
              )}
            </div>
            {/* Ma nhom */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mã nhóm<span className="ml-1 text-red-500">*</span>
                </div>
              </div>
              <input
                name="maNhom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maNhom}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="GP01"
              />
              {formik.errors.maNhom && formik.touched.maNhom && (
                <span className="text-xs text-red-500">{formik.errors.maNhom}</span>
              )}
            </div>

            {/* Mat khau */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu<span className="ml-1 text-red-500">*</span>
                </div>
              </div>
              <input
                name="matKhau"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.matKhau}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Mật khẩu"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <span className="text-xs text-red-500">{formik.errors.matKhau}</span>
              )}
            </div>
            {/* Xac nhan mat khau */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Xác nhập mật khẩu<span className="ml-1 text-red-500">*</span>
                </div>
              </div>
              <input
                name="xacNhanMatKhau"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.xacNhanMatKhau}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Xác nhận mật khẩu"
              />
              {formik.errors.xacNhanMatKhau && formik.touched.xacNhanMatKhau && (
                <span className="text-xs text-red-500">{formik.errors.xacNhanMatKhau}</span>
              )}
            </div>
            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg mb-8"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

// email: "duy312@gmail.com"
// hoTen: "Nguyễn hoàng duy"
// maLoaiNguoiDung: "QuanTri"
// maNhom: "GP01"
// soDT: "098714420678"
// taiKhoan: "Di"
// {
//   "taiKhoan": "string",
//   "matKhau": "string",
//   "email": "string",
//   "soDt": "string",
//   "maNhom": "string",
//   "hoTen": "string"
// }
