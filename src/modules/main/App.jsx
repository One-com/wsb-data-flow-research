/* @flow */

import React from 'react';
import { TopBar } from '../topBar/TopBar';
import { SaveStatus } from '../saveStatus/constants';
import { AppBottomContainerStyle, AppStyle } from './styles';
import { LeftPanel } from '../leftPanel/LeftPanel';
import { Workspace } from '../workspace/main/ui/Workspace';
import { PropertiesPanelContainer } from '../propertiesPanel/ui/PropertiesPanelContainer';

export const App = () => (
  <div style={AppStyle}>
    <TopBar saveStatus={SaveStatus.SAVED} />
    <div style={AppBottomContainerStyle}>
      <LeftPanel />
      <Workspace />
      <PropertiesPanelContainer />
    </div>
  </div>
);

