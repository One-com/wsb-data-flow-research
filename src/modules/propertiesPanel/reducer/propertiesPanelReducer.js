/* @flow */

import { diReducer, DiSelector } from '@sepo27/redux-di';
import type { PropertiesPanelState } from '../types';
import type { WorkspaceState } from '../../workspace/main/types';
import { SHOW_PROPERTIES_PANEL_ACTION } from '../actions';
import { findComponentById } from '../../workspace/components/functions/findComponentById';
import { PROPERTIES_PANEL_INITIAL_SPACING } from '../constants';

export const PropertiesPanelInitialState: PropertiesPanelState = {
  show: false,
  componentId: '',
  dimensions: { width: 0, height: 0 },
  position: {top: 0, left: 0},
};

export const propertiesPanelReducer = diReducer(
  PropertiesPanelInitialState,
  {
    components: new DiSelector('@workspace', (ws: WorkspaceState) => ws.components),
  },
  (state: PropertiesPanelState, action: Object, {components}) => {
    if (action.type === SHOW_PROPERTIES_PANEL_ACTION) {
      const
        {componentId, dimensions} = action.payload,
        com = findComponentById(componentId, components);

      return {
        ...state,
        show: true,
        componentId,
        dimensions,
        position: {
          top: com.position.top,
          left: com.position.left + com.dimensions.width + PROPERTIES_PANEL_INITIAL_SPACING,
        },
      };
    }
    
    return state;
  },
);
