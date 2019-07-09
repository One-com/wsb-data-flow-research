/* @flow */

import type { AppState } from '../../src/modules/main/types';
import { deepMerge } from '../../src/lib/deepMerge';
import { ComponentsInitialState } from '../../src/modules/workspace/components/reducer/componentsReducer';
import { WorkspaceMarginInitialState } from '../../src/modules/workspace/margin/main/reducer/workspaceMarginReducer';
import { WorkspaceWidthInitialState } from '../../src/modules/workspace/width/workspaceWidthReducer';
import { WorkspaceStatusInitialState } from '../../src/modules/workspace/status/workspaceStatusReducer';
import { PropertiesPanelInitialState } from '../../src/modules/propertiesPanel/reducer/propertiesPanelReducer';
import { SaveStatusInitialState } from '../../src/modules/save/status/saveStatusReducer';

export type AppStatePartial = $Shape<AppState>;

export const appStateGen = (partial?: AppStatePartial = {}): AppState =>
  deepMerge({
    workspace: {
      components: ComponentsInitialState,
      margin: WorkspaceMarginInitialState,
      width: WorkspaceWidthInitialState,
      status: WorkspaceStatusInitialState,
    },
    propertiesPanel: PropertiesPanelInitialState,
    saveStatus: SaveStatusInitialState,
  }, partial);
