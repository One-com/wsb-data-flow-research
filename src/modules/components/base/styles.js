/* @flow */

type Params = {
  isSelected: boolean,
  isGhost?: boolean,
};

export const getBaseComponentStyle = ({isGhost, isSelected}: Params) => {
  const
    visibility = isGhost ? 'hidden' : 'visible',
    borderColor = isSelected ? 'greenyellow' : 'gray';

  return {
    visibility,
    // position: 'absolute',
    border: `1px solid ${borderColor}`,
    cursor: 'default',
    userSelect: 'none',
    padding: '5px',
  };
};
