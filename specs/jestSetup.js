/* @flow */

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem() {
      return 'stuff'
    },
  },
});

