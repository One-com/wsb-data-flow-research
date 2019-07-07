/* @flow */

import type { WorkspaceMarginState } from '../workspace/margin/main/types';
import type { ComponentsState } from '../workspace/components/types';

export type PersistedData = {|
  workspace: {
    margin: WorkspaceMarginState,
    components: ComponentsState,
  },
|};
