/* eslint-disable no-useless-computed-key */
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import moment from 'moment';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '~/redux/actions/QuanLyPhimAction';
import { GROUP_ID } from '~/util/settings/config';
function Add() {
  const componentSize = 'default';
  const inputFileRef = useRef();
  const [form] = Form.useForm();

  const [image, setImage] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const Dispatch = useDispatch();

  // const handleChangeFile = (e) => {
  //   // console.log(e);
  //   const file = e.target.files[0];
  //   // console.log('file: ', file);
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = (e) => {
  //     // console.log(e.target.result);
  //     setImage(e.target.result);
  //   };
  //   setImgSrc(file);
  // };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
      const render = new FileReader();
      render.readAsDataURL(file);
      render.onload = (e) => {
        setImage(e.target.result);
      };
      setImgSrc(file);
    }
    setImgSrc(e.target.files[0]);
    console.log('handleChangeFile: ', e.target.files[0]);
  };

  const handleClickFile = (e) => {
    console.log('handleClickFile: ', e.target.files[0]);
  };

  const onFinish = (values) => {
    const { radioStatusFilm, ...restValues } = values;

    restValues.maNhom = GROUP_ID;

    // handle value option status film
    const optionStatusFilm = ['dangChieu', 'sapChieu'];
    optionStatusFilm.forEach((option) => {
      if (option === radioStatusFilm) {
        restValues[option] = true;
      } else {
        restValues[option] = false;
      }
    });

    // handle value ngayKhoiChieu
    restValues.ngayKhoiChieu = moment(restValues.ngayKhoiChieu).format('DD-MM-YYYY');

    // handle value hinhAnh
    restValues.hinhAnh = imgSrc;

    console.log('restValues: ', restValues);

    // Dispatch action here...
    const formData = new FormData();
    for (let key in restValues) {
      if (key !== 'hinhAnh') {
        formData.append(key, restValues[key]);
      } else {
        formData.append('File', restValues[key], restValues[key].name);
      }
    }
    // console.log('formData: ', formData);
    Dispatch(themPhimUploadHinhAction(formData));

    // reset form
    onReset();
  };

  const onReset = () => {
    form.resetFields();
    inputFileRef.current.value = '';
    setImage('');
  };

  return (
    <>
      <h3 className="text-2xl mb-4" style={{ color: '#f1b722' }}>
        Thêm phim
      </h3>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          tenPhim: '',
          trailer: '',
          moTa: '',
          radioStatusFilm: '',
          hot: false,
          ngayKhoiChieu: '',
          danhGia: 0,
        }}
        size={componentSize}
      >
        <Form.Item
          label="Tên phim"
          name="tenPhim" // requied for validation
          rules={[
            {
              required: true,
              message: `Tên phim không được bỏ trống!`,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Trailer" name="trailer">
          <Input />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="moTa"
          rules={[
            {
              required: true,
              message: 'Mô tả không được bỏ trống!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Ngày khởi chiếu"
          name="ngayKhoiChieu"
          rules={[
            {
              required: true,
              message: 'Ngày khởi chiếu không được bỏ trống!',
            },
          ]}
        >
          <DatePicker format={'DD-MM-YYYY'} />
        </Form.Item>

        <Form.Item
          // name="statusFilm"
          name="radioStatusFilm"
          label="Trạng thái phim"
          rules={[
            {
              required: true,
              message: 'Trang thái phim không được bỏ trống!',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="dangChieu">Đang chiếu</Radio>
            <Radio value="sapChieu">Sắp chiếu</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="hot" label="Độ hot" valuePropName="checked">
          <Checkbox>Hot</Checkbox>
        </Form.Item>

        <Form.Item label="Đánh giá">
          <Form.Item name="danhGia" noStyle>
            <InputNumber min={0} max={10} />
          </Form.Item>
          <span className="ant-form-text">sao</span>
        </Form.Item>

        <Form.Item label="Hình ảnh phim">
          <input ref={inputFileRef} type="file" onChange={handleChangeFile} onClick={handleClickFile} />
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
