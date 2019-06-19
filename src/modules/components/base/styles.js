/* @flow */

type Params = {
  selected: boolean,
};

export const getBaseComponentStyle = ({selected}: Params) => {
  const borderColor = selected ? 'greenyellow' : 'gray';

  return {
    position: 'absolute',
    border: `1px solid ${borderColor}`,
    cursor: 'default',
    userSelect: 'none',
    padding: '5px',
  };
};
