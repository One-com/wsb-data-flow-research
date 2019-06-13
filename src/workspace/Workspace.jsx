/* @flow */

import React from 'react';
import { WorkspaceMargins } from './WorkspaceMargins';

const Style = {
  flex: '1',
  height: '100%',
  position: 'relative',
};

type Props = {};

export const Workspace = (props: Props) => (
  <section style={Style}>
    <WorkspaceMargins width={900} />
  </section>
);
