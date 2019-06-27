/* @flow */

import type { ComponentsState } from '../components/types';
import type { WorkspaceMarginState } from '../margin/types';
import type { WorkspaceWidthState } from '../width/types';
import type { WorkspaceStatusState } from '../status/types';

export type WorkspaceState = {
  components: ComponentsState,
  margin: WorkspaceMarginState,
  width: WorkspaceWidthState,
  status: WorkspaceStatusState,
};
