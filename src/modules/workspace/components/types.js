/* @flow */

import type { AddComponentAction } from './actions';
import type { SingleComponentState } from '../../components/types';
import type { WorkspaceWidthState } from '../width/types';
import type { WorkspaceMarginState } from '../margin/main/types';

export type Components = Array<SingleComponentState<>>

export type ComponentsState = Components;

export type ComponentsAction = AddComponentAction;

export type ComponentsDependencies = {
  wsWidth: WorkspaceWidthState,
  margin: WorkspaceMarginState,
};
