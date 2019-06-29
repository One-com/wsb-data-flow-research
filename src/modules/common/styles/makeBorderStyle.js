/* @flow */

type Params = {
  width?: number,
  style?: 'solid' | 'dashed',
  color?: string,
};

export const makeBorderStyle = (
  {
    width = 1,
    style = 'solid',
    color = 'black',
  }: Params,
) => `${width}px ${style} ${color}`;
