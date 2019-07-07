/* @flow */

export class TestBenchStubLocalStorage
{
  getItem: Object;
  setItem: Object;

  constructor(sinon: Object)
  {
    // $FlowFixMe
    this.getItem = sinon.stub(_localStorage, 'getItem');
  }
}
