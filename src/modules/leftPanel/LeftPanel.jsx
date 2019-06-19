/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import { LeftPanelComponent } from './LeftPanelComponent';
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
    <LeftPanelComponent onClick={() => props.dispatch(addButtonComponentAction())}>Button</LeftPanelComponent>
    <LeftPanelComponent onClick={() => console.log('===Add Text component')}>Text</LeftPanelComponent>
  </aside>
);

// $FlowFixMe
export const LeftPanel = connect()(ComponentsPanelCom);
