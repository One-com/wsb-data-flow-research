/* @flow */

import React from 'react';
import { WorkspaceGuidelines } from './WorkspaceGuidelines';

const Style = {
  flex: '1',
  height: '100%',
  position: 'relative',
};

type Props = {};

export const Workspace = (props: Props) => (
  <section style={Style}>
    <WorkspaceGuidelines width={900} />
  </section>
);
