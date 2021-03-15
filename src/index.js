/**
 * @format
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';

import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
