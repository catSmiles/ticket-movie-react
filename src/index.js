import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/configStore';
import { DOMAIN } from './util/settings/config';

import * as signalR from '@aspnet/signalr';

//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection
  .start()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <GlobalStyles>
            <App />
          </GlobalStyles>
        </React.StrictMode>
      </Provider>,
      document.getElementById('root'),
    );
  })
  .catch((errors) => {
    console.log('errors connection from index.js: ', errors);
  });

// ReactDOM.render(
//   <GlobalStyles>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </GlobalStyles>,
//   document.getElementById('root'),
// );

// @react18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <GlobalStyles>
//       <App />
//     </GlobalStyles>
//   </React.StrictMode>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
