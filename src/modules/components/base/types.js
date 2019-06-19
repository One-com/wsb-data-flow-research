/* @flow */

import * as React from 'react';
import type { Position } from '../../common/commonTypes';
import type { ComponentKindT } from '../types';
import type { AppDispatch } from '../../main/types';

export type BaseComponentState = {
  id: string,
  kind: ComponentKindT,
  position: Position,
  selected: boolean,
};

export type BaseComponentProps = {
  state: BaseComponentState,
  children: React.Node,
  dispatch: AppDispatch,
};
