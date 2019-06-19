/* @flow */

import type { ComponentKindT } from '../../components/types';

export type AddComponentAction = {
  type: 'ADD_COMPONENT_ACTION',
  payload: ComponentKindT,
};

export const
  ADD_COMPONENT_ACTION = 'ADD_COMPONENT_ACTION',
  addComponentAction = (kind: ComponentKindT): AddComponentAction => ({
    type: ADD_COMPONENT_ACTION,
    payload: kind,
  });

export const
  SELECT_COMPONENT_ACTION = 'SELECT_COMPONENT_ACTION',
  selectComponentAction = (id: string) => ({
    type: SELECT_COMPONENT_ACTION,
    payload: id,
  });
