/* @flow */

import React from 'react';
import type { ComponentsState } from '../../components/types';
import { comRegistry } from '../../../components/ComponentsRegistry';

type Props = {
  components: ComponentsState,
};

export const WorkspaceComponents = ({ components }: Props) => (
  // $FlowFixMe: TODO
  components.map(comState => {
    const Ui = comRegistry.getUi(comState.kind);
    return <Ui state={comState} key={comState.id} />
  })
);
