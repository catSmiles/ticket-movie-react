/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import AntDesign from '~/components/AntDesign';
import SwiperCarousel from '~/components/SwiperCarousel';
import HomeCarousel from '~/templates/HomeTemplate/layouts/HomeCarousel';
import HomeMenu from './HomeMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { layDanhSachPhimAction } from '~/redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '~/redux/actions/QuanLyRapAction';
function Home() {
  console.log('Home re-render');
  // Call API here
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(layDanhSachHeThongRapAction());
  }, []);

  // console.log('arrFilm: ', arrFilm);
  // console.log('He thong rap chieu: ', heThongRapChieu);

  const commingSoonFilms = [];
  const playingFilms = [];
  arrFilm.map((filmItem) => {
    if (filmItem.sapChieu) {
      commingSoonFilms.push(filmItem);
    } else if (!filmItem.sapChieu) {
      playingFilms.push(filmItem);
    }
  });

  // console.log('Phim sap chieu: ', commingSoonFilms);
  // console.log('Phim dang chieu: ', playingFilms);

  return (
    <>
      {/* Carousel */}
      <HomeCarousel />
      {/* Phim dang chieu */}
      <SwiperCarousel title="Phim đang chiếu" data={playingFilms} />
      {/* Phim sap chieu */}
      <SwiperCarousel backgroundImage title="Phim sắp chiếu" data={commingSoonFilms} />
      {/* Lich chieu */}

      <AntDesign>
        <HomeMenu data={heThongRapChieu} />
      </AntDesign>
    </>
  );
}

export default Home;
