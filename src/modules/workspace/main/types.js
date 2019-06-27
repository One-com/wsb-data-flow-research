/* @flow */

import type { ComponentsState } from '../components/types';
import type { WorkspaceMarginState } from '../margin/types';

export type WorkspaceState = {
  components: ComponentsState,
  margin: WorkspaceMarginState,
};
