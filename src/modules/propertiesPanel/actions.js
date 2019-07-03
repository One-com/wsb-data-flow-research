/* @flow */

import type { Dimensions } from '../common/commonTypes';

export const
  SHOW_PROPERTIES_PANEL_ACTION = 'SHOW_PROPERTIES_PANEL_ACTION',
  showPropertiesPanelAction = (componentId: string, dimensions: Dimensions) => ({
    type: SHOW_PROPERTIES_PANEL_ACTION,
    payload: {componentId, dimensions},
  });
