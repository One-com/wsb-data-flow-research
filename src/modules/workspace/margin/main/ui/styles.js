/* @flow */

type Params = {
  width: number,
};

export const getWorkspaceMarginStyle = ({width}: Params) => ({
  position: 'absolute',
  height: '100%',
  left: 0,
  right: 0,
  margin: '0 auto',
  zIndex: 0,
  width,
});
