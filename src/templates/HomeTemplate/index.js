// Libary
import { Route } from 'react-router-dom';

// Component
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function HomeTemplate({ Component, ...restProps }) {
  console.log('HomeTemplate props: ', restProps);
  return (
    <Route
      {...restProps}
      render={(propsRoute) => (
        <>
          <Header {...propsRoute} />
          <Component {...propsRoute} />
          <Footer {...propsRoute} />
        </>
      )}
    />
  );
}

export default HomeTemplate;
