/* @flow */

import React from 'react';
import { WorkspaceGuidelines } from './WorkspaceGuidelines';
import { BaseComponent } from './BaseComponent';

const Style = {
  flex: '1',
  height: '100%',
  position: 'relative',
};

type Props = {};

export const Workspace = (props: Props) => (
  <div style={Style}>
    <BaseComponent>Button component</BaseComponent>
    <WorkspaceGuidelines width={900} />
  </div>
);
