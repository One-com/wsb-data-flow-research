/* @flow */

import { initReducer } from '@sepo27/redux-di';
import type { ComponentsState } from '../types';

export const WorkspaceComponentsReducerInitialState: ComponentsState = [];

export const workspaceComponentsReducer = initReducer([], s => s);
