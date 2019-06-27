/* @flow */

import React from 'react';
import type { ComponentsState } from '../../components/types';
import { comRegistry } from '../../../components/ComponentsRegistry';

const Style = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 1,
};

type Props = {
  components: ComponentsState,
};

export const WorkspaceComponents = ({ components }: Props) => (
  <div style={Style}>
    {// $FlowFixMe: TODO
      components.map(comState => {
        const Ui = comRegistry.getUi(comState.kind);
        return <Ui state={comState} key={comState.id} />
      })
    }
  </div>
);
