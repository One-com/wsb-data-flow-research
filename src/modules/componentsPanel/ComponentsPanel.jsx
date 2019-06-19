/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import { PanelComponent } from './PanelComponent';
import { addButtonComponentAction } from '../components/button/actions';
import type { AppDispatch } from '../main/types';

const Style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '200px',
  height: '100%',
  backgroundColor: '#eee',
  borderRight: '1px solid gray',
};

type Props = {
  dispatch: AppDispatch,
};

const ComponentsPanelCom = (props: Props) => (
  <aside style={Style}>
    <PanelComponent onClick={() => props.dispatch(addButtonComponentAction())}>Button</PanelComponent>
    <PanelComponent onClick={() => console.log('===Add Text component')}>Text</PanelComponent>
  </aside>
);

// $FlowFixMe
export const ComponentsPanel = connect()(ComponentsPanelCom);
