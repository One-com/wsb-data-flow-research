/* @flow */

export class TestStubLocalStorage
{
  getItem: Object;
  setItem: Object;

  constructor(sinon: Object)
  {
    // $FlowFixMe
    this.getItem = sinon.stub(_localStorage, 'getItem');
    this.setItem = sinon.stub(_localStorage, 'setItem');
  }
}
