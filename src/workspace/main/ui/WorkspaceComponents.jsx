/* @flow */

import React from 'react';
import type { ComponentsState } from '../../components/types';
import { comRegistry } from '../../../components/ComponentsRegistry';
import type { SingleComponentState, SingleComponentUi } from '../../../components/types';

type Props = {
  components: ComponentsState,
};

export const WorkspaceComponents = ({ components }: Props) => (
  // $FlowFixMe: TODO
  components.map((comState, i) => { // TODO: use uuid for key
    const Ui = comRegistry.getUi(comState.kind);
    return <Ui state={comState} key={i} />
  })
);
