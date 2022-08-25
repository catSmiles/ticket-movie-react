/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
// import { Radio, Space, Tabs } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomeMenu.module.scss';

import { Tabs } from 'antd';
import images from '~/assets/images';

const { TabPane } = Tabs;
const cx = classNames.bind(styles);

class HomeMenu extends React.PureComponent {
  state = {
    tabPosition: 'left',
  };
  renderLogoCinemaIcon = (image, title) => {
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

  renderInfoCinema = (image, title) => {
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

  renderHeThongRap = () => {
    return this.props.data.map((heThongRap, index) => {
      return (
        <TabPane tab={this.renderLogoCinemaIcon(heThongRap.logo, heThongRap.tenHeThongRap)} key={index}>
          <Tabs tabPosition={this.state.tabPosition} className="change-style-antd">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane tab={this.renderInfoCinema(heThongRap.logo, cumRap.tenCumRap)} key={index}>
                  Phim dang chieu
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  render() {
    console.log('New HomeMenu re-render');
    const { tabPosition } = this.state;
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
            {this.renderHeThongRap()}
          </Tabs>
        </div>
      </section>
    );
  }
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
