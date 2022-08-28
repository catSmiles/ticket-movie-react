import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../HomeTemplate/layouts/Footer';
import Header from '../HomeTemplate/layouts/Header';
import { USER_LOGIN } from '~/util/settings/config';

function CheckOutTemplate({ Component, ...restProps }) {
  // Scroll len dau trang khi reload lai trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => (
        <>
          <Header {...propsRoute} />
          <Component {...propsRoute} />
          <Footer />
        </>
      )}
    />
  );
}

export default CheckOutTemplate;
