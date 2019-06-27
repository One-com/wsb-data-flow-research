/* @flow */

import React from 'react';

const Style = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.13)',
};

export const WorkspaceLoading = () => (
   <div style={Style} />
);
