/* @flow */

import { mergeDeepWith } from 'ramda';

const
  isa = v => Array.isArray(v),
  iso = v => typeof v === 'object' && !Array.isArray(v) && v !== null;

const makeMergeFn = deepMergeFn => function mergeFn(l, r) {
  if (isa(l) && isa(r)) {
    const
      length = r.length > l.length ? r.length : l.length,
      res = [];

    for (let i = 0; i < length; i++) {
      res[i] = r[i] !== undefined ? mergeFn(l[i], r[i]) : l[i];
    }

    return res;
  } else if (iso(l) && iso(r)) {
    return deepMergeFn(l, r);
  }

  return r;
};

/**
 * Does Right -> Left merging
 */
export const deepMerge = (...args /*: Array<Object> */) /*: Object */ => {
  if (args.length === 1) return args[0];

  let res = args[0];

  for (let i = 1; i < args.length; i++) {
    res = mergeDeepWith(makeMergeFn(deepMerge), res, args[i]);
  }

  return res;
};
