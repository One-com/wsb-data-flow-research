/* @flow */

import { deepMerge } from './index';

describe('deepMerge', () => {
  it('returns single object as is', () => {
    const params = [{
      foo: 'foo',
      bar: 'bar',
    }];

    expect(deepMerge(...params)).toEqual({
      foo: 'foo',
      bar: 'bar',
    });
  });

  it('merges two objects', () => {
    const params = [
      {
        a: 'a',
        b: 'b',
      },
      {
        a: 'a new',
        c: 'c',
      },
    ];

    expect(deepMerge(...params)).toEqual({
      a: 'a new',
      b: 'b',
      c: 'c',
    });
  });

  it('merges two objects recursively', () => {
    const params = [
      {
        a: {
          b: 'b',
          c: {
            value: 'value',
          },
        },
      },
      {
        a: {
          c: {
            value: 'value new',
            value2: 'second value',
          },
        },
        d: 'd',
      },
    ];

    expect(deepMerge(...params)).toEqual({
      a: {
        b: 'b',
        c: {
          value: 'value new',
          value2: 'second value',
        },
      },
      d: 'd',
    });
  });

  it('merges multiple objects recursively with arrays', () => {
    const params = [
      {
        a: {
          b: 'b',
          c: {
            value: 'value',
          },
        },
        d: {
          arr: [1, 2, 3, 4, 5],
        },
        e: 'e',
      },
      {
        a: {
          b: 'b new b',
          c: {
            value2: 'second value',
          },
        },
      },
      {
        a: {
          c: {
            value: 'c value',
          },
        },
        d: {
          arr: ['1', '2', '3'],
        },
      },
    ];

    expect(deepMerge(...params)).toEqual({
      a: {
        b: 'b new b',
        c: {
          value: 'c value',
          value2: 'second value',
        },
      },
      d: {
        arr: ['1', '2', '3', 4, 5],
      },
      e: 'e',
    });
  });

  it('merges arrays', () => {
    const params = [
      {
        a: [1, 2, 3],
      },
      {
        a: [undefined, 5, 6],
      },
    ];

    expect(deepMerge(...params)).toEqual({
      a: [1, 5, 6],
    });
  });

  it('merges arrays of objects', () => {
    const params = [
      {
        a: [
          {
            b: 'b',
            c: { d: 'd', e: 'e' },
          },
        ],
      },
      {
        a: [
          {
            c: {
              e: 'new e',
            },
          },
        ],
      },
    ];

    expect(deepMerge(...params)).toEqual({
      a: [
        {
          b: 'b',
          c: { d: 'd', e: 'new e' },
        },
      ],
    });
  });
});
