// import 'antd/dist/antd.css';

import { Tabs } from 'antd';
import images from '~/assets/images';

const { TabPane } = Tabs;

function HomeMenuTest() {
  const tabPosition = 'left';

  const cgvIcon = (
    // <span className="flex rounded border border-gray-200 h-12 w-12">
    //   <img src={images.cgvIcon} alt="cgv" />
    // </span>

    // Test
    <div className="relative cursor-pointer">
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
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e"
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
    // end Test
  );

  return (
    <section classNameName="container max-w-screen-xl mx-auto bg-white mb-20">
      <p className="text-center text-white" style={{ backgroundColor: ' #081b27' }}>
        Lich chieu phim
      </p>
      {/* tabs component */}
      <Tabs tabPosition={tabPosition}>
        <TabPane tab={cgvIcon} key="1">
          <Tabs tabPosition={tabPosition}>
            <TabPane tab="Children 1 Tab 1" key="1.1">
              Content Tab
            </TabPane>
            <TabPane tab="Children 2 Tab 1" key="1.2">
              Content Tab
            </TabPane>
          </Tabs>
        </TabPane>

        <TabPane tab={cgvIcon} key="2">
          <Tabs tabPosition={tabPosition}>
            <TabPane tab="Children Tab 2" key="2.1">
              Content Tab
            </TabPane>
          </Tabs>
        </TabPane>

        <TabPane tab={cgvIcon} key="3">
          <Tabs tabPosition={tabPosition}>
            <TabPane tab="Children Tab 3" key="3.1">
              Content Tab
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    </section>
  );
}

export default HomeMenuTest;
