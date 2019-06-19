/* @flow */

import React from 'react';
import {connect, Provider} from 'react-redux';
import type { AppState, AppStore } from './types';
import { App } from './App';

type Props = {
  store: AppStore,
};

export const AppProvider = ({store}: Props) => {
  const AppHoc = connect((state: AppState) => ({state}))(App);
  return (
    <Provider store={store}>
      <AppHoc />
    </Provider>
  );
};
