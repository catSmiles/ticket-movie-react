/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-computed-key */
import './styles.scss';
import { Button, DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { layThongTinPhimAction, capNhatPhimUploadAction } from '~/redux/actions/QuanLyPhimAction';
function Edit(props) {
  const componentSize = 'default';
  const dispatch = useDispatch();
  const { infoFilm } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log('infoFilm: ', infoFilm);

  const [image, setImage] = useState('');

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));
  }, []);
  // console.log(infoFilm);

  // formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: infoFilm.maPhim,
      tenPhim: infoFilm.tenPhim,
      trailer: infoFilm.trailer,
      moTa: infoFilm.moTa,
      ngayKhoiChieu: infoFilm.ngayKhoiChieu,
      dangChieu: infoFilm.dangChieu,
      sapChieu: infoFilm.sapChieu,
      hot: infoFilm.hot,
      danhGia: infoFilm.danhGia,
      hinhAnh: null,
      maNhom: infoFilm.maNhom,
      statusFilm: 'dangChieu',
    },
    onSubmit: (values) => {
      console.log('values of form: ', values);
      const formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else if (key === 'hinhAnh' && values.hinhAnh !== null) {
          formData.append('File', values.hinhAnh, values.hinhAnh.name);
        }
      }

      // dispatch action here
      dispatch(capNhatPhimUploadAction(formData));
    },
  });

  const handleChangeTextArea = (e) => {
    const name = e.target.props.name;
    const value = e.target.value;
    // console.log('name and value of handleChangeTextArea: ', name, value);
    formik.setFieldValue(name, value);
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
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
  };

  // OK
  const handleChangeFile = (e) => {
    // console.log(e);
    const file = e.target.files[0];
    // console.log('file: ', file);
    if (!file) {
      setImage('');
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      // console.log(e.target.result);
      setImage(e.target.result);
    };
    formik.setFieldValue('hinhAnh', file);
  };

  const handleChangeSwitch = (name) => {
    // console.log('name handleChangeSwitch: ', name);
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <>
      <h3 className="text-2xl mb-4" style={{ color: '#f1b722' }}>
        Thêm phim
      </h3>
      <Form
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
        }}
        // onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
        </Form.Item>

        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
        </Form.Item>

        <Form.Item label="Mô tả">
          <Input.TextArea name="moTa" onChange={handleChangeTextArea} value={formik.values.moTa} />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format={'DD/MM/YYYY'}
            onChange={handleChangeDatePicker}
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>

        <Form.Item label="Đang chiếu">
          {/* <Switch name="dangChieu" onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} /> */}
          <Switch
            name="dangChieu"
            className="my-switch"
            onChange={handleChangeSwitch('dangChieu')}
            checked={formik.values.dangChieu}
          />
        </Form.Item>

        <Form.Item label="Sắp chiếu">
          <Switch
            name="sapChieu"
            className="my-switch"
            onChange={handleChangeSwitch('sapChieu')}
            checked={formik.values.sapChieu}
          />
        </Form.Item>

        <Form.Item label="Hot">
          <Switch name="hot" className="my-switch" onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
        </Form.Item>

        <Form.Item label="Đánh giá">
          <Form.Item noStyle>
            <InputNumber
              min={0}
              max={10}
              name="danhGia"
              onChange={handleChangeInputNumber('danhGia')}
              value={formik.values.danhGia}
            />
          </Form.Item>
          <span className="ant-form-text">sao</span>
        </Form.Item>

        {/* <Form.Item label="Hình ảnh phim">
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
        </Form.Item> */}

        <Form.Item label="Hình ảnh phim">
          <input type="file" onChange={handleChangeFile} />
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
              src={image === '' ? infoFilm.hinhAnh : image}
              alt="preview-img"
            />
          </div>
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

export default Edit;
