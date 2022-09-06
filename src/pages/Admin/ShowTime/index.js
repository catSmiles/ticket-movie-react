/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Select, DatePicker, Button, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { quanLyRapService } from '~/services/QuanLyRapService';
import { quanLyDatVeService } from '~/services/QuanLyDatVeService';
import { useFormik } from 'formik';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'rc-field-form';

function ShowTime(props) {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    heThongRap: [],
    cumRap: [],
  });

  // Call API lay thong tin he thong rap
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await quanLyRapService.layThongTinHeThongRap();
        console.log('data thong tin he thong rap: ', result);
        setState({ ...state, heThongRap: result.data.content });
      } catch (error) {
        console.log('error call api get thong tin he thong rap: ', error);
      }
    }
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      maRap: '',
      giaVe: '',
      ngayChieuGioChieu: '',
    },
    onSubmit: async (values) => {
      try {
        const result = await quanLyDatVeService.taoLichChieu(values);
        alert('Tạo lịch chiếu thành công!');
        form.resetFields();
        console.log(result);
      } catch (error) {
        console.log('error Tao lich chieu: ', error);
      }
    },
  });

  const convertSelectHeThongRap = () => {
    return state.heThongRap.map((item) => ({ label: item.tenHeThongRap, value: item.maHeThongRap }));
  };

  const convertSelectCumRap = () => {
    return state.cumRap.map((item) => ({ label: item.tenCumRap, value: item.maCumRap }));
  };

  const handleChangeHeThongRap = async (maHeThongRap) => {
    try {
      const result = await quanLyRapService.layThongTinCumRapTheoHeThong(maHeThongRap);
      setState({ ...state, cumRap: result.data.content });
    } catch (error) {
      console.log('error lay thong tin cum rap theo he thong: ', error);
    }
  };

  const handleChangeCumRap = (maCumRap) => {
    formik.setFieldValue('maRap', maCumRap);
  };

  const handleChangeDate = (value) => {
    console.log(value);
    formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY HH:mm:ss'));
  };

  const handleOK = (value) => {
    // formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD MM YYYY HH:mm:ss'));
    formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY HH:mm:ss'));
  };

  const handleChangeGiaVe = (value) => {
    formik.setFieldValue('giaVe', value);
  };

  return (
    <>
      <h3 className="text-2xl mb-4" style={{ color: '#f1b722' }}>
        Tạo lịch chiếu
      </h3>

      <Form
        onSubmitCapture={formik.handleSubmit}
        name="control-film"
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item label="Hệ thống rạp" name="heThongRap">
          <Select
            placeholder="Chọn hệ thống rạp"
            options={convertSelectHeThongRap()}
            onChange={handleChangeHeThongRap}
          />
        </Form.Item>

        <Form.Item label="Cụm rạp" name="cumRap">
          <Select placeholder="Chọn cụm rạp" options={convertSelectCumRap()} onChange={handleChangeCumRap} />
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu" name="ngayChieuGioChieu">
          <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={handleChangeDate} onOk={handleOK} />
        </Form.Item>

        <Form.Item label="Giá vé" name="giaVe">
          <InputNumber onChange={handleChangeGiaVe} />
        </Form.Item>

        <Form.Item label="Tác vụ">
          <Button className="text-blue-500 border-blue-500" htmlType="submit">
            Tạo lịch chiếu
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ShowTime;
