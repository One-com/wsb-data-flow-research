/* @flow */

import React from 'react';
import { TopBar } from '../topBar/TopBar';
import { AppBottomContainerStyle, AppStyle } from './styles';
import { LeftPanel } from '../leftPanel/LeftPanel';
import { Workspace } from '../workspace/main/ui/Workspace';
import { PropertiesPanelContainer } from '../propertiesPanel/ui/PropertiesPanelContainer';
import { connectComponent } from '../common/connectComponent';
import type { AppDispatch } from './types';
import { mountAppAction } from './actions';

type Props = {
  dispatch: AppDispatch,
};

export class AppCom extends React.Component<Props>
{
  componentDidMount() {
    this.props.dispatch(mountAppAction());
  }
  
  render()
  {
    return (
      <div style={AppStyle}>
        <TopBar />
        <div style={AppBottomContainerStyle}>
          <LeftPanel />
          <Workspace />
          <PropertiesPanelContainer />
        </div>
      </div>
    );
  }
}

export const App = connectComponent(AppCom);
