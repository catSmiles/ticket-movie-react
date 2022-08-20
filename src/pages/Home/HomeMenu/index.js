// import { useState } from 'react';
// import { Radio, Space, Tabs } from 'antd';

import { Tabs } from 'antd';
import images from '~/assets/images';

const { TabPane } = Tabs;

function HomeMenu() {
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
                // src="https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png"
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

  return (
    <section className="container max-w-screen-xl mx-auto bg-white mb-20">
      <p className="text-center text-white" style={{ backgroundColor: ' #081b27' }}>
        Lich chieu phim
      </p>
      {/* tabs component */}
      <Tabs tabPosition={tabPosition} className="custom-class-antd">
        {/* Cinema Beta */}
        <TabPane tab={logoBetaCinemaIcon} key="1">
          <Tabs tabPosition={tabPosition} className="change-style-antd">
            <TabPane tab={infoBetaCinema} key="1.1">
              <h1 className="text-xl py-2"> Beta Cinema 0</h1>
            </TabPane>
            <TabPane tab={infoBetaCinema} key="1.2">
              Beta Cinema 1
            </TabPane>
          </Tabs>
        </TabPane>

        {/* Cinema Galaxy */}
        <TabPane tab={logoGalaxyCinemaIcon} key="2">
          <Tabs tabPosition={tabPosition} className="change-style-antd">
            <TabPane tab={infoGalaxyCinema} key="2.1">
              Galaxy Cinema 0
            </TabPane>
            <TabPane tab={infoGalaxyCinema} key="2.2">
              Galaxy Cinema 1
            </TabPane>
          </Tabs>
        </TabPane>

        {/* Cinema BHD */}
        <TabPane tab={logoBHDCinemaIcon} key="3">
          <Tabs tabPosition={tabPosition} className="change-style-antd">
            <TabPane tab={infoBHDCinema} key="3.1">
              BHD Cinema 0
            </TabPane>
            <TabPane tab={infoBHDCinema} key="3.2">
              BHD Cinema 1
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
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
