/* @flow */

type Params = {
  isSelected: boolean,
};

export const getBaseComponentStyle = ({isSelected}: Params) => {
  const borderColor = isSelected ? 'greenyellow' : 'gray';

  return {
    position: 'absolute',
    border: `1px solid ${borderColor}`,
    cursor: 'default',
    userSelect: 'none',
    padding: '5px',
  };
};
