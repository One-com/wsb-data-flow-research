/* @flow */

import * as React from "react";

export type Position = {
  top: number,
  left: number,
};

export type Dimensions = {
  width: number,
  height: number,
};

export type MapT<K, V> = {[k: K]: V};

export type ReactElementRef<ElementType> = {current: null | React.ElementRef<ElementType>};

type FnReturnT<R, F: (...args: Array<any>) => R> = R;
export type FnReturn<R> = FnReturnT<*, R>;
