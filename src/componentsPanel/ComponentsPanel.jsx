/* @flow */

import React from 'react';
import { PanelComponent } from './PanelComponent';

const Style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '200px',
  height: '100%',
  backgroundColor: '#eee',
  borderRight: '1px solid gray',
};

type Props = {};

export const ComponentsPanel = (props: Props) => (
  <aside style={Style}>
    <PanelComponent onClick={() => console.log('===Add Button component')}>Button</PanelComponent>
    <PanelComponent onClick={() => console.log('===Add Text component')}>Text</PanelComponent>
  </aside>
);
