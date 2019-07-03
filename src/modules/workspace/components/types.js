/* @flow */

import type { ComponentKindT, SingleComponentState } from '../../components/types';
import type { WorkspaceWidthState } from '../width/types';
import type { WorkspaceMarginState } from '../margin/main/types';
import { addComponentAction } from './actions';

export type Components = Array<SingleComponentState<>>

export type ComponentsState = Components;

export type ComponentsAction = $Call<typeof addComponentAction, ComponentKindT>;

export type ComponentsDependencies = {
  wsWidth: WorkspaceWidthState,
  margin: WorkspaceMarginState,
};
