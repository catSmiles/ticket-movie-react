/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { layThongTinChiTietPhim } from '~/redux/actions/QuanLyRapAction';
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';

const { TabPane } = Tabs;
const cx = classNames.bind(styles);

function Detail(props) {
  // console.log('Detail re-render');
  const tabPosition = 'left';
  const dispatch = useDispatch();
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);

  useEffect(() => {
    // lay thong tin param tu url
    let { id } = props.match.params;
    // console.log('id: ', id);
    dispatch(layThongTinChiTietPhim(id));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log('Detail filmDetail: ', filmDetail);

  // ICONS
  const logoBetaCinemaIcon = (
    <div className="relative cursor-pointer w-16">
      <div className="relative mx-auto flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border bg-white border-gray-200">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0px',
            margin: '0px',
            padding: '0px',
            position: 'relative',
            maxwidth: '100%',
          }}
        >
          <span
            style={{
              boxSizing: 'borderBox',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0px',
              margin: '0px',
              padding: '0px',
              maxWidth: '100%',
            }}
          >
            <img
              alt=""
              aria-hidden="true"
              src={images.layout38}
              style={{
                display: 'block',
                maxwidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0px',
                margin: '0px',
                padding: '0px',
              }}
            />
          </span>
          <img
            alt="Beta Cinemas"
            src="https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png"
            decoding="async"
            data-nimg="intrinsic"
            style={{
              position: 'absolute',
              inset: '0px',
              boxSizing: 'border-box',
              padding: '0px',
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0px',
              height: '0px',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%',
            }}
          />
        </span>
      </div>
      <div className="mt-2 ml-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs text-gray-500">
        Beta Cinemas
      </div>
    </div>
  );

  const logoGalaxyCinemaIcon = (
    <div className="relative cursor-pointer w-16">
      <div className="relative mx-auto flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border bg-white border-gray-200">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0px',
            margin: '0px',
            padding: '0px',
            position: 'relative',
            maxwidth: '100%',
          }}
        >
          <span
            style={{
              boxSizing: 'borderBox',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0px',
              margin: '0px',
              padding: '0px',
              maxWidth: '100%',
            }}
          >
            <img
              alt=""
              aria-hidden="true"
              src={images.layout38}
              style={{
                display: 'block',
                maxwidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0px',
                margin: '0px',
                padding: '0px',
              }}
            />
          </span>
          <img
            alt="Beta Cinemas"
            // src="https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png"
            src="https://static.mservice.io/cinema/momo-upload-api-211123095138-637732578984425272.png"
            decoding="async"
            data-nimg="intrinsic"
            style={{
              position: 'absolute',
              inset: '0px',
              boxSizing: 'border-box',
              padding: '0px',
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0px',
              height: '0px',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%',
            }}
          />
        </span>
      </div>
      <div className="mt-2 ml-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs text-gray-500">
        Galaxy Cinemas
      </div>
    </div>
  );

  const logoBHDCinemaIcon = (
    <div className="relative cursor-pointer w-16">
      <div className="relative mx-auto flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border bg-white border-gray-200">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0px',
            margin: '0px',
            padding: '0px',
            position: 'relative',
            maxwidth: '100%',
          }}
        >
          <span
            style={{
              boxSizing: 'borderBox',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0px',
              margin: '0px',
              padding: '0px',
              maxWidth: '100%',
            }}
          >
            <img
              alt=""
              aria-hidden="true"
              src={images.layout38}
              style={{
                display: 'block',
                maxwidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0px',
                margin: '0px',
                padding: '0px',
              }}
            />
          </span>
          <img
            alt="Beta Cinemas"
            // src="https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png"
            src="https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png"
            decoding="async"
            data-nimg="intrinsic"
            style={{
              position: 'absolute',
              inset: '0px',
              boxSizing: 'border-box',
              padding: '0px',
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0px',
              height: '0px',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%',
            }}
          />
        </span>
      </div>
      <div className="mt-2 ml-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs text-gray-500">
        BHD Cinemas
      </div>
    </div>
  );

  // INFO
  const infoBHDCinema = (
    <div className="cursor-pointer  md:hover:bg-gray-50">
      <div className="fwefwe relative block py-2 px-4">
        <div className="z-1 absolute inset-0 bg-transparent"></div>
        <div className="flex flex-nowrap items-center ">
          <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white ">
            <span
              style={{
                boxSizing: 'borderBox',
                display: 'inlineBlock',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0px',
                margin: '0px',
                padding: '0px',
                position: 'relative',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  boxSizing: 'borderBox',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  maxWidth: '100%',
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src={images.layout32}
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                  }}
                />
              </span>
              <img
                alt="BHD Star 3 tháng 2"
                src="https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: 'absolute',
                  inset: '0px',
                  boxSizing: 'border-box',
                  padding: '0px',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0px',
                  height: '0px',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
              />
            </span>
          </div>
          <div className="mb-0 min-w-0 flex-1 pl-3 text-md leading-tight text-gray-800">
            <span>BHD Star 3 tháng 2</span>
          </div>
          <div className="hidden flex-none self-center pl-2 md:block md:pl-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const infoGalaxyCinema = (
    <div className="cursor-pointer  md:hover:bg-gray-50">
      <div className="fwefwe relative block py-2 px-4">
        <div className="z-1 absolute inset-0 bg-transparent"></div>
        <div className="flex flex-nowrap items-center ">
          <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white ">
            <span
              style={{
                boxSizing: 'borderBox',
                display: 'inlineBlock',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0px',
                margin: '0px',
                padding: '0px',
                position: 'relative',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  boxSizing: 'borderBox',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  maxWidth: '100%',
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src={images.layout32}
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                  }}
                />
              </span>
              <img
                alt="Galaxy"
                src="https://static.mservice.io/cinema/momo-upload-api-211123095138-637732578984425272.png"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: 'absolute',
                  inset: '0px',
                  boxSizing: 'border-box',
                  padding: '0px',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0px',
                  height: '0px',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
              />
            </span>
          </div>
          <div className="mb-0 min-w-0 flex-1 pl-3 text-md leading-tight text-gray-800">
            <span>Galaxy Huỳnh Tấn Phát</span>
          </div>
          <div className="hidden flex-none self-center pl-2 md:block md:pl-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const infoBetaCinema = (
    <div className="cursor-pointer  md:hover:bg-gray-50">
      <div className="fwefwe relative block py-2 px-4">
        <div className="z-1 absolute inset-0 bg-transparent"></div>
        <div className="flex flex-nowrap items-center ">
          <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white ">
            <span
              style={{
                boxSizing: 'borderBox',
                display: 'inlineBlock',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0px',
                margin: '0px',
                padding: '0px',
                position: 'relative',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  boxSizing: 'borderBox',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  maxWidth: '100%',
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src={images.layout32}
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                  }}
                />
              </span>
              <img
                alt="Galaxy"
                // src="https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png"
                // src="https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png"
                src=" https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: 'absolute',
                  inset: '0px',
                  boxSizing: 'border-box',
                  padding: '0px',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0px',
                  height: '0px',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
              />
            </span>
          </div>
          <div className="mb-0 min-w-0 flex-1 pl-3 text-md leading-tight text-gray-800">
            <span>Beta Quang Trung</span>
          </div>
          <div className="hidden flex-none self-center pl-2 md:block md:pl-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  // FILM
  const infoFilm = (
    <div className="grid">
      <div className="block w-full px-4 py-4 text-left" style={{ borderTop: '1px solid #ddd' }}>
        <div className={cx('film-show', 'grid', 'gap-y-0', 'gap-x-4', 'md:gap-x-4', 'lg:gap-x-6')}>
          <div className="col-start-1 row-span-2 row-start-1">
            <a className="group block" href="#">
              <div className="bg-gray-100  relative overflow-hidden rounded">
                <div className="flex bg-gray-200">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      position: 'relative',
                      maxWidth: '100%',
                    }}
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: '1',
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                        maxWidth: '100%',
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src={images.layout120x180}
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: '1',
                          border: '0px',
                          margin: '0px',
                          padding: '0px',
                        }}
                      />
                    </span>
                    <img
                      alt="film-img"
                      src="https://img.cdn.vncdn.io/cinema/img/78043093813255893-hckc_-_poster_1_.jpg"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="scale-100 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        position: 'absolute',
                        inset: '0px',
                        boxSizing: 'border-box',
                        padding: '0px',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0px',
                        height: '0px',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                    />
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-start-2">
            <div className="font-semibold leading-tight text-gray-800">
              <a className="" href="#">
                Hạ Cánh Khẩn Cấp
              </a>
            </div>
            <div className="mt-1 text-tiny leading-tight text-gray-400">Gây Cấn,Chính Kịch</div>
          </div>
          <div className=" col-span-2 col-start-1 md:col-start-2">
            <div className="pt-4 pb-4">
              <div className="mb-2 text-sm font-semibold ">2D Phụ đề</div>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                {/* Origin style
                <div className="tracking-engage-btn-showtime group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">10:00</strong> ~ 12:27
                </div> */}
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">11:00</strong> ~ 13:27
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">12:30</strong> ~ 14:57
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">13:45</strong> ~ 16:12
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">15:15</strong> ~ 17:42
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">16:15</strong> ~ 18:42
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">17:15</strong> ~ 19:42
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">18:00</strong> ~ 20:27
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">19:00</strong> ~ 21:27
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">19:45</strong> ~ 22:12
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">20:30</strong> ~ 22:57
                </div>
                <div className="group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-tiny text-sky-600 hover:bg-white hover:text-sky-500">
                  <strong className="text-md font-semibold ">21:15</strong> ~ 23:42
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {/* Detail Film */}
      <div className="relative z-10 flex items-center justify-center bg-black py-6 text-white text-opacity-95">
        {/* <div className="container max-w-screen-xl mx-auto w-full px-5 md:px-8 lg:px-8"> */}
        <div className="container max-w-screen-xl mx-auto w-full px-5">
          <div className="flex flex-wrap items-center md:flex-nowrap md:space-x-10 lg:items-start">
            <div className="cine__hero__poster relative mb-4 w-full md:mb-0 md:w-auto">
              <div className="w-32 md:mx-auto md:w-64">
                <div className="after:z-10 flex overflow-hidden border border-white/20 md:relative ">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'relative',
                      maxWidth: '100%',
                    }}
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: '1',
                        border: '0',
                        margin: '0',
                        padding: '0',
                        maxWidth: '100%',
                      }}
                    >
                      <img
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: '1',
                          border: '0',
                          margin: '0',
                          padding: '0',
                        }}
                        alt=""
                        aria-hidden="true"
                        src={images.layout254x381}
                      />
                    </span>
                    <img
                      alt={filmDetail.tenPhim}
                      src={filmDetail.hinhAnh}
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">{filmDetail.tenPhim}</h1>
              <div className="flex flex-nowrap space-x-2 overflow-x-auto overflow-y-hidden pt-2 pb-3 md:space-x-3">
                <div className="cine__score imdb  flex shrink-0 flex-nowrap  items-center">
                  <div>
                    <svg
                      id="home_img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="32"
                      viewBox="0 0 64 32"
                      version="1.1"
                      className="w-11"
                    >
                      <g fill="#F5C518" className="jsx-f9389667183552d6">
                        <rect x="0" y="0" width="100%" height="100%" rx="4" className="jsx-f9389667183552d6"></rect>
                      </g>
                      <g
                        transform="translate(8.000000, 7.000000)"
                        fill="#000000"
                        fillRule="nonzero"
                        className="jsx-f9389667183552d6"
                      >
                        <polygon points="0 18 5 18 5 0 0 0" className="jsx-f9389667183552d6"></polygon>
                        <path
                          d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"
                          className="jsx-f9389667183552d6"
                        ></path>
                        <path
                          d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"
                          className="jsx-f9389667183552d6"
                        ></path>
                        <path
                          d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"
                          className="jsx-f9389667183552d6"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="px-2 text-xl font-bold">
                    {filmDetail.danhGia}
                    <span className="text-sm font-normal">/10</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-opacity-90">Nội dung</h3>
              <div className="mt-2 text-sm leading-relaxed text-white text-opacity-70 xl:max-w-xl">
                {filmDetail.moTa}
              </div>
              <div className="mt-3 text-sm text-gray-700 ">
                <div className="mb-2 flex flex-nowrap space-x-4 md:space-x-5">
                  <div className="">
                    <div className="whitespace-nowrap text-white text-opacity-50">Ngày chiếu</div>
                    <div className="mt-1 font-bold text-white text-opacity-90">
                      {moment(filmDetail.ngayKhoiChieu).format('DD/MM/YYYY')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lich Chieu phim */}
      <section className="bg-white py-8 md:py-10 lg:py-14 container max-w-screen-xl mx-auto w-full px-5">
        <div className="container max-w-screen-xl mx-auto bg-white mb-20">
          <h2 className="text-2xl font-bold lg:text-3xl text-black text-center mb-12">Lịch chiếu phim</h2>
          {/* tabs component */}
          {/* <Tabs tabPosition={tabPosition} className={cx('custom-class-antd', 'cinema-list-height')}> */}
          <Tabs
            tabPosition={tabPosition}
            // className="custom-class-antd md:shadow-soju1 rounded-lg border-gray-200  bg-white md:overflow-hidden md:border"
            className={cx(
              'custom-class-antd',
              'shadow-soju1',
              'rounded-lg',
              'border-gray-200',
              'bg-white',
              'md:overflow-hidden md:border',
            )}
            // style={{ border: '1px solid #000', padding: '1rem' }}
          >
            {/* Cinema Beta */}
            <TabPane tab={logoBetaCinemaIcon} key="1">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBetaCinema} key="1.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.2">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.3">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.4">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.5">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.6">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.7">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.8">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.9">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.10">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBetaCinema} key="1.11">
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            {/* Cinema Galaxy */}
            <TabPane tab={logoGalaxyCinemaIcon} key="2">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoGalaxyCinema} key="2.1">
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoGalaxyCinema} key="2.2">
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            {/* Cinema BHD */}
            <TabPane tab={logoBHDCinemaIcon} key="3">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBHDCinema} key="3.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBHDCinema} key="3.2">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab={logoBHDCinemaIcon} key="4">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBHDCinema} key="4.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBHDCinema} key="4.2">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab={logoBHDCinemaIcon} key="5">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBHDCinema} key="5.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBHDCinema} key="5.2">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab={logoBHDCinemaIcon} key="6">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBHDCinema} key="6.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBHDCinema} key="6.2">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab={logoBHDCinemaIcon} key="7">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBHDCinema} key="7.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBHDCinema} key="7.2">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab={logoBHDCinemaIcon} key="8">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBHDCinema} key="8.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBHDCinema} key="8.2">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab={logoBHDCinemaIcon} key="9">
              <Tabs tabPosition={tabPosition} className="change-style-antd">
                <TabPane tab={infoBHDCinema} key="9.1">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
                <TabPane tab={infoBHDCinema} key="9.2">
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                  {infoFilm}
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Detail;
