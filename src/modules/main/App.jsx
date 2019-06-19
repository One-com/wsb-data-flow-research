/* @flow */

import React from 'react';
import { TopBar } from '../topBar/TopBar';
import { SaveStatus } from '../saveStatus/constants';
import { AppBottomContainerStyle, AppStyle } from './styles';
import { ComponentsPanel } from '../componentsPanel/ComponentsPanel';
import { Workspace } from '../workspace/main/ui/Workspace';

export const App = () => (
  <div style={AppStyle}>
    <TopBar saveStatus={SaveStatus.SAVED} />
    <div style={AppBottomContainerStyle}>
      <ComponentsPanel />
      <Workspace />
    </div>
  </div>
);

