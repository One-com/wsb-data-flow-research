import React from 'react';
import {render} from 'react-dom';
import { createAppStore } from './modules/main/createAppStore';

const store = createAppStore();

const renderApp = () => {
  // const AppCom = require('./modules/core/AppCom').AppCom;
  const AppProvider = require('./modules/main/AppProvider').AppProvider;

  render(
    <AppProvider store={store} />,
    // $FlowFixMe: TODO
    document.getElementById('root'),
  );
};

// $FlowFixMe: TODO
if (module.hot) {
  // $FlowFixMe: TODO
  module.hot.accept('./modules/core/AppCom', () => {
    console.log('=== Hot reloading the app...');
    renderApp();
  });
}

renderApp();
