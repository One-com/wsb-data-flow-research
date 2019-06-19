/* @flow */

import type { AddComponentAction } from './actions';
import type { SingleComponentState } from '../../components/types';

export type ComponentsState = Array<SingleComponentState<>>;

export type ComponentsAction = AddComponentAction;
