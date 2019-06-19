/* @flow */

export type Position = {
  top: number,
  left: number,
};

export type Dimensions = {
  width: number,
  height: number,
};

export type MapT<K, V> = {[k: K]: V};
