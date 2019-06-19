/* @flow */

import type { BaseComponentState } from '../../workspaceComponents/base/types';
import type { AddComponentAction } from './actions';

export type ComponentsState = Array<BaseComponentState>;

export type ComponentsAction = AddComponentAction;
