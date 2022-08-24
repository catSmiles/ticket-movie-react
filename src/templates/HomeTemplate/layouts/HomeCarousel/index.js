import images from '~/assets/images';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import styles from './HomeCarousel.module.scss';

// import required modules
import { Navigation, Pagination } from 'swiper';

const cx = classNames.bind(styles);

function HomeCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        // spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{ height: '513px', width: '100%' }}
        // className="container mx-auto max-w-screen-xl"
      >
        {/* <SwiperSlide style={{ backgroundImage: `url(${images.banner})` }} className={cx('swiper-slide')} /> */}
        <SwiperSlide style={{ backgroundImage: `url(${images.bannerTwo})` }} className={cx('swiper-slide')} />
        <SwiperSlide style={{ backgroundImage: `url(${images.bannerOne})` }} className={cx('swiper-slide')} />
        <SwiperSlide style={{ backgroundImage: `url(${images.bannerThree})` }} className={cx('swiper-slide')} />
        {/* <SwiperSlide><img src={images.banner} alt="banner" /></SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default HomeCarousel;
