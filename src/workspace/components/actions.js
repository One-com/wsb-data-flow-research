/* @flow */

import type { ComponentKindT } from '../../workspaceComponents/types';

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
