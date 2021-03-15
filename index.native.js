/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './src/App';
import {name as appName} from './src/app.json';

import configureStore from './src/redux/store/configureStore';

const store = configureStore();

class TicTacToe extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => TicTacToe);
