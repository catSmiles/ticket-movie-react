/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
// import { Radio, Space, Tabs } from 'antd';
import classNames from 'classnames/bind';
import styles from './HomeMenu.module.scss';

import { Tabs } from 'antd';
import images from '~/assets/images';

const { TabPane } = Tabs;
const cx = classNames.bind(styles);

function HomeMenu({ data }) {
  // console.log('HomeMenu data: ', data);
  const tabPosition = 'left';

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

  const renderLogoCinemaIcon = (image, title) => {
    return (
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
              alt={title}
              src={image}
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
          {title}
        </div>
      </div>
    );
  };

  // INFO
  const infoBHDCinema = (
    <div className="cursor-pointer  md:hover:bg-gray-50">
      <div className="relative block py-2 px-4">
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
      <div className="relative block py-2 px-4">
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
      <div className="relative block py-2 px-4">
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

  const renderInfoCinema = (image, title) => {
    return (
      <div className="cursor-pointer  md:hover:bg-gray-50">
        <div className="relative block py-2 px-4">
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
                  alt={title}
                  src={image}
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
            <div
              className="mb-0 min-w-0 flex-1 pl-3 text-md leading-tight text-gray-800"
              style={{ minWidth: '280px', textAlign: 'left' }}
            >
              <span>{title}</span>
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
  };

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

  const renderHeThongRap = () => {
    return data.map((heThongRap, index) => {
      return (
        <TabPane tab={renderLogoCinemaIcon(heThongRap.logo, heThongRap.tenHeThongRap)} key={index}>
          <Tabs tabPosition={tabPosition} className="change-style-antd">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane tab={renderInfoCinema(heThongRap.logo, cumRap.tenCumRap)} key={index}>
                  Phim dang chieu
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <section className="bg-white py-8 md:py-10 lg:py-14">
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
          {renderHeThongRap()}
        </Tabs>
      </div>
    </section>
  );
}

export default HomeMenu;

// import { useState } from 'react';
// import 'antd/dist/antd.css';
// import { Radio, Space, Tabs } from 'antd';
// const { TabPane } = Tabs;

// function HomeMenu() {
//   const [tabPosition, setTabPosition] = useState('left');

//   const changeTabPosition = (e) => {
//     setTabPosition(e.target.value);
//   };

//   return (
//     <section className="container max-w-screen-xl mx-auto">
//       <p className="text-center">Lich chieu phim</p>
//       {/* tabs */}
//       <Space
//         style={{
//           marginBottom: 24,
//         }}
//       >
//         Tab position:
//         {/* <Radio.Group value={tabPosition} onChange={changeTabPosition}> */}
//         <Radio.Group value={tabPosition}>
//           <Radio.Button value="top">top</Radio.Button>
//           <Radio.Button value="bottom">bottom</Radio.Button>
//           <Radio.Button value="left">left</Radio.Button>
//           <Radio.Button value="right">right</Radio.Button>
//         </Radio.Group>
//       </Space>
//       <Tabs tabPosition={tabPosition}>
//         <TabPane tab="Tab 1" key="1">
//           Content of Tab 1
//         </TabPane>
//         <TabPane tab="Tab 2" key="2">
//           Content of Tab 2
//         </TabPane>
//         <TabPane tab="Tab 3" key="3">
//           Content of Tab 3
//         </TabPane>
//       </Tabs>
//     </section>
//   );
// }
