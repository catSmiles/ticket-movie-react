/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { GROUP_ID } from '~/util/settings/config';
import { REGEX_PASSWORD, REGEX_PHONE_NUMBER } from '~/variables';
import {
  layThongTinNguoiDungTuDanhSachNguoiDungAction,
  themNguoiDungAction,
} from '~/redux/actions/QuanLyNguoiDungAction';
import { useEffect } from 'react';

const { Option } = Select;

function EditUser(props) {
  const { thongTinNguoiDungTuDanhSachNguoiDung: userInfo } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id: taiKhoan } = props.match.params;
    console.log('taiKhoan: ', taiKhoan);

    // dispatch action lay thong tin nguoi dung
    dispatch(layThongTinNguoiDungTuDanhSachNguoiDungAction(taiKhoan));
  }, []);

  // Update initialValues form
  // useEffect(() => {
  //   form.setFieldsValue(defaultValues)
  //  }, [form, defaultValues])

  // layout form
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };

  // submit form
  const onFinish = (values) => {
    console.log('data of form edit: ', values);

    // const { xacNhanMatKhau, ...infoUser } = values;
    // console.log('info user: ', infoUser);

    // Che giau thong tin truoc khi gui di - error
    // const formData = new FormData();
    // for (let key in infoUser) {
    //   formData.append(key, infoUser[key]);
    // }

    // dispatch action add user
  };

  return (
    <>
      <h3 className="text-2xl mb-4" style={{ color: '#f1b722' }}>
        Cập nhật thông tin người dùng
      </h3>
      <Form
        {...layout}
        onFinish={onFinish}
        name="add-user"
        initialValues={{
          taiKhoan: userInfo.taiKhoan,
          matKhau: userInfo.matKhau,
          xacNhanMatKhau: '',
          email: userInfo.email,
          soDt: userInfo.soDt,
          maLoaiNguoiDung: userInfo.maLoaiNguoiDung,
          hoTen: userInfo.hoTen,
        }}
      >
        <Form.Item
          label="Tai khoản"
          name="taiKhoan"
          // rules={[
          //   { required: true, message: 'Vui lòng nhập trường này' },
          //   { min: 6, message: 'Tài khoản tối thiểu 6 ký tự' },
          //   { max: 15, message: 'Tài khoản tối đa 15 ký tự' },
          // ]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Họ tên"
          name="hoTen"
          // rules={[
          //   { required: true, message: 'Vui lòng nhập trường này' },
          //   { min: 2, message: 'Họ tên tối thiểu 2 ký tự' },
          //   { max: 15, message: 'Họ tên tối đa 15 ký tự' },
          // ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          // rules={[
          //   { type: 'email', message: 'Email không hợp lệ' },
          //   { required: true, message: 'Vui lòng nhập trường này' },
          // ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="soDt"
          // rules={[
          //   { required: true, message: 'Vui lòng nhập trường này' },
          //   {
          //     pattern: REGEX_PHONE_NUMBER,
          //     message: 'Số điện thoại không hợp lệ',
          //   },
          // ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          tooltip="Mật khẩu chứa ít 6 ký tự, tối đa 15 ký tự. Gồm 1 ký tự chữ thường, 1 ký tự chữ hoa, 1 ký tự số và 1 ký tự đặc biệt."
          // rules={[
          //   { required: true, message: 'Vui lòng nhập trường này' },
          //   {
          //     pattern: REGEX_PASSWORD,
          //     message: 'Mật khẩu không hợp lệ',
          //   },
          // ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="xacNhanMatKhau"
          dependencies={['matKhau']}
          // rules={[
          //   {
          //     required: true,
          //     message: 'Vui lòng nhập trường này',
          //   },
          //   ({ getFieldValue }) => ({
          //     validator(_, value) {
          //       if (!value || getFieldValue('matKhau') === value) {
          //         return Promise.resolve();
          //       }

          //       return Promise.reject(new Error('Mật khẩu nhập lại không chính xác'));
          //     },
          //   }),
          // ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Loại người dùng"
          name="maLoaiNguoiDung"
          // rules={[{ required: true, message: 'Trường này không được bỏ trống' }]}
        >
          <Select placeholder="Loại người dùng">
            <Option value="khachHang">Khách hàng</Option>
            <Option value="quanTri">Quản trị</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Tác vụ">
          <Button className="text-blue-500 border-blue-500" type="primary" htmlType="submit">
            Cập nhật thông tin người dùng
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default EditUser;
