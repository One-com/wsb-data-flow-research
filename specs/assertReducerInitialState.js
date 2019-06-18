/* @flow */

import type { Reducer } from 'redux';

export const assertReducerInitialState = <S>(reducer: Reducer<S, *>, initialState: S) => {
  expect(reducer(undefined, {})).toEqual(initialState);
};
