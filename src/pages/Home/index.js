import SwiperCarousel from '~/components/SwiperCarousel';
import HomeCarousel from '~/templates/HomeTemplate/layouts/HomeCarousel';
import HomeMenu from './HomeMenu';

function Home() {
  return (
    <>
      {/* Carousel */}
      <HomeCarousel />
      {/* Phim dang chieu */}
      <SwiperCarousel data="Phim đang chiếu" />
      {/* Phim sap chieu */}
      <SwiperCarousel data="Phim sắp chiếu" />
      {/* Lich chieu */}
      <HomeMenu />
    </>
  );
}

export default Home;
