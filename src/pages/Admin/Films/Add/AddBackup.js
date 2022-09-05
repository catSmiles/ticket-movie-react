import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { useState } from 'react';

function Add() {
  const componentSize = 'default';
  const [image, setImage] = useState('');
  // const [componentSize, setComponentSize] = useState('large');

  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };

  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log('values of form: ', values);
    },
  });
  // OK
  const handleChangeTextArea = (e) => {
    const name = e.target.props.name;
    const value = e.target.value.trim();
    // console.log('name and value of handleChangeTextArea: ', name, value);
    formik.setFieldValue(name, value);
  };
  // OK
  const handleChangeRadio = (e) => {
    // console.log('value of handleChangeRadio: ', e);
    const options = ['dangChieu', 'sapChieu'];

    options.forEach((option) => {
      e.target.value === option ? formik.setFieldValue(option, true) : formik.setFieldValue(option, false);
    });
  };
  // OK
  const handleChangeCheckbox = (e) => {
    // console.log('value of handleChangeCheckbox: ', e.target);
    const name = e.target.id;
    const isChecked = e.target.checked;
    formik.setFieldValue(name, isChecked);
  };

  // OK
  const handleChangeInputNumber = (name) => {
    // console.log('handleChangeInputNumber: ', name);
    return (value) => {
      // Ap dung Closure
      formik.setFieldValue(name, value);
    };
  };
  // OK
  const handleChangeDatePicker = (value) => {
    const ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
    // console.log('value of handleChangeDatePicker: ', ngayKhoiChieu);
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
  };
  // OK
  const handleChangeFile = (e) => {
    // console.log(e);
    const file = e.target.files[0];
    // console.log('file: ', file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      // console.log(e.target.result);
      setImage(e.target.result);
    };
    formik.setFieldValue('hinhAnh', file);
  };

  // new
  const onFinish = (values) => {
    console.log('value of form1: ', values);
  };

  const handleChangeInput = (e) => {
    console.log(e);
  };

  return (
    <>
      <h3 className="text-2xl mb-4" style={{ color: '#f1b722' }}>
        Thêm phim
      </h3>
      <Form
        // onFinish={onFinish}
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
          'start-number': 0,
        }}
        // onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item
          label="Tên phim"
          name="tenPhim" // requied for validation
          rules={[
            {
              required: true,
              message: `Ten phim không được bỏ trống`,
            },
          ]}
        >
          {/* <Input name="tenPhim" onChange={formik.handleChange} /> */}
          <Input />
        </Form.Item>

        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Mô tả">
          <Input.TextArea name="moTa" onChange={handleChangeTextArea} />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu">
          <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
        </Form.Item>

        <Form.Item name="status-film" label="Trạng thái phim" onChange={handleChangeRadio}>
          <Radio.Group>
            <Radio value="dangChieu">Đang chiếu</Radio>
            <Radio value="sapChieu">Sắp chiếu</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="hot" label="Độ hot" valuePropName="checked">
          <Checkbox onChange={handleChangeCheckbox}>Hot</Checkbox>
        </Form.Item>

        <Form.Item label="Đánh giá">
          <Form.Item name="start-number" noStyle>
            <InputNumber onChange={handleChangeInputNumber('danhGia')} />
          </Form.Item>
          <span className="ant-form-text">sao</span>
        </Form.Item>

        {/* <Form.Item label="Hình ảnh phim" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item> */}

        <Form.Item label="Hình ảnh phim">
          <input type="file" onChange={handleChangeFile} />
          {image && (
            <div
              className="mt-2"
              style={{
                width: '80px',
                height: '100px',
                borderRadius: '4px',
                overflow: 'hide',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                padding: '4px',
              }}
            >
              <img
                style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '4px' }}
                src={image}
                alt="preview-img"
              />
            </div>
          )}
        </Form.Item>

        <Form.Item label="Tác vụ">
          <Button className="text-blue-500 border-blue-500" htmlType="submit">
            Thêm phim
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Add;
