/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// My css
import './styles.css';
import styles from './SwiperCarousel.module.scss';

// Swiperjs - Libary
import { Pagination, Navigation } from 'swiper';
import images from '~/assets/images';
import { history } from '~/App';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

// import required modules

function SwiperCarousel({ data = [], ...props }) {
  // console.log('Swiper: ', props);
  return (
    <section
      // className="bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14"
      className={
        props.backgroundImage
          ? 'bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14'
          : 'py-8 md:py-10 lg:py-14'
      }
      // style={{ backgroundImage: `url(${images.background})` }}
      style={props.backgroundImage ? { backgroundImage: `url(${images.background})` } : {}}
    >
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8 lg:px-8">
        {/* title */}
        <div className="mb-5 text-center md:mb-8">
          <div className="inline-block relative">
            <strong className="relative z-2 font-bold">
              <h2
                className="text-2xl font-bold lg:text-3xl"
                style={props.backgroundImage ? { color: 'white' } : { color: '#f1b722' }}
              >
                {props.title}
              </h2>
            </strong>
          </div>
        </div>
        {/* content */}
        <div className={cx('-mx-5')}>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            // slidesPerGroup={5}
            // loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            // style={{ height: '400px' }}
          >
            {/* Swiper carousel item */}
            {data.map((filmItem, index) => {
              return (
                <SwiperSlide key={index} className="h-auto">
                  <a
                    className="group relative block"
                    onClick={() => {
                      history.push(`/detail/${filmItem.maPhim}`);
                    }}
                  >
                    <div className="background-gray-100 relative z-10 overflow-hidden rounded">
                      <div className=" flex  bg-black">
                        <span className={cx('wrap-img')}>
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
                              src={images.backCardFilm}
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
                            // alt="Dragon Ball: Super Hero"
                            alt={filmItem.tenPhim}
                            // src="https://img.cdn.vncdn.io/cinema/img/79249161460312584-2.jpg"
                            src={filmItem.hinhAnh}
                            className="scale-100 transition-transform duration-300 group-hover:scale-105"
                            style={{
                              position: 'absolute',
                              inset: '0px',
                              boxsizing: 'border-box',
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
                  <div className="mt-2 md:mt-4 text-left">
                    {/* <div className="font-semibold leading-tight text-white"> */}
                    <div
                      className="font-semibold leading-tight"
                      style={props.backgroundImage ? { color: 'white' } : {}}
                    >
                      <NavLink className="" to={`/detail/${filmItem.maPhim}`}>
                        {/* Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng */}
                        {filmItem.tenPhim}
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SwiperCarousel;

{
  /* <SwiperSlide className="h-auto">
  <a className="group relative block" href="#">
    <div className="background-gray-100 relative z-10 overflow-hidden rounded">
      <div className=" flex  bg-black">
        <span className={cx('wrap-img')}>
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
              src={images.backCardFilm}
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
            alt="Dragon Ball: Super Hero"
            src="https://img.cdn.vncdn.io/cinema/img/79249161460312584-2.jpg"
            // src="https://img.cdn.vncdn.io/cinema/img/7924916sdsds1460312584-2.jpg"
            className="scale-100 transition-transform duration-300 group-hover:scale-105"
            style={{
              position: 'absolute',
              inset: '0px',
              boxsizing: 'border-box',
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
  <div className="mt-2 md:mt-4 text-left">
    <div className="font-semibold leading-tight" style={props.backgroundImage ? { color: 'white' } : {}}>
      <a className="" href="#">
        Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng
      </a>
    </div>
  </div>
</SwiperSlide>; */
}

// Origin data
{
  /* <SwiperSlide className="h-auto">
<a className="group relative block" href="#">
  <div className="background-gray-100 relative z-10 overflow-hidden rounded">
    <div className=" flex  bg-black">
      <span className={cx('wrap-img')}>
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
            src={images.backCardFilm}
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
          alt="Dragon Ball: Super Hero"
          // src="https://img.cdn.vncdn.io/cinema/img/79249161460312584-2.jpg"
          src="https://img.cdn.vncdn.io/cinema/img/7924916146031258asasas4-2.jpg"
          className="scale-100 transition-transform duration-300 group-hover:scale-105"
          style={{
            position: 'absolute',
            inset: '0px',
            boxsizing: 'border-box',
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
<div className="mt-2 md:mt-4"></div>
</SwiperSlide> */
}

// Origin Card
{
  /* <SwiperSlide className="h-auto">
  <a className="group relative block" href="#">
    <div className="background-gray-100 relative z-10 overflow-hidden rounded">
      <div className=" flex  bg-black">
        <span className={cx('wrap-img')}>
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
              src={images.backCardFilm}
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
            alt="Dragon Ball: Super Hero"
            src="https://img.cdn.vncdn.io/cinema/img/79249161460312584-2.jpg"
            className="scale-100 transition-transform duration-300 group-hover:scale-105"
            style={{
              position: 'absolute',
              inset: '0px',
              boxsizing: 'border-box',
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
  <div className="mt-2 md:mt-4 text-left">
    <div className="font-semibold leading-tight text-white">
      <a className="" href="#">
        Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng
      </a>
    </div>
    <div className={cx('mt-1', 'text-tiny', 'leading-tight', 'text-gray-400')}>Khoa Học Viễn Tưởng, Hoạt Hình</div>
  </div>
</SwiperSlide>; */
}

// new card
{
  /* <SwiperSlide className="h-auto">
  <a className="group relative block" href="#">
    <div className="background-gray-100 relative z-10 overflow-hidden rounded">
      <div className=" flex  bg-black">
        <span className={cx('wrap-img')}>
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
              src={images.backCardFilm}
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
            alt="Dragon Ball: Super Hero"
            src="https://img.cdn.vncdn.io/cinema/img/79249161460312584-2.jpg"
            // src="https://img.cdn.vncdn.io/cinema/img/7924916sdsds1460312584-2.jpg"
            className="scale-100 transition-transform duration-300 group-hover:scale-105"
            style={{
              position: 'absolute',
              inset: '0px',
              boxsizing: 'border-box',
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
  <div className="mt-2 md:mt-4 text-left">
    <div className="font-semibold leading-tight text-white">
      <a className="" href="#">
        Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng
      </a>
    </div>
    <div className={cx('mt-1', 'text-tiny', 'leading-tight', 'text-gray-400')}>Khoa Học Viễn Tưởng, Hoạt Hình</div>
  </div>
</SwiperSlide>; */
}
