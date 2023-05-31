// @flow
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './src/index';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
