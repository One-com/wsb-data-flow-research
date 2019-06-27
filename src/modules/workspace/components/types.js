/* @flow */

import type { AddComponentAction } from './actions';
import type { SingleComponentState } from '../../components/types';

export type Components = Array<SingleComponentState<>>

export type ComponentsState = Components;

export type ComponentsAction = AddComponentAction;
