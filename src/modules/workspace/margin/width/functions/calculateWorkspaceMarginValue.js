/* @flow */

export const calculateWorkspaceMarginValue = (marginWidth: number, wsWidth: number): number => (
  (wsWidth - marginWidth) / 2
);
