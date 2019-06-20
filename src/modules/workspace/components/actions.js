/* @flow */

import type { ComponentKindT } from '../../components/types';
import type { Dimensions } from '../../common/commonTypes';

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
  NEW_COMPONENT_MEASURED_ACTION = 'NEW_COMPONENT_MEASURED_ACTION',
  newComponentMeasuredAction = (id: string, dimensions: Dimensions) => ({
    type: NEW_COMPONENT_MEASURED_ACTION,
    payload: { id, dimensions },
  });

export const
  SELECT_COMPONENT_ACTION = 'SELECT_COMPONENT_ACTION',
  selectComponentAction = (id: string) => ({
    type: SELECT_COMPONENT_ACTION,
    payload: id,
  });
