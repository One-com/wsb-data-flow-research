/* @flow */

import type { BaseComponentState } from '../../components/base/types';
import type { AddComponentAction } from './actions';

export type ComponentsState = Array<BaseComponentState>;

export type ComponentsAction = AddComponentAction;
