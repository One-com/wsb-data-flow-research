/* @flow */

export class TestBenchStubLocalStorage
{
  #sinon;

  getItem;
  setItem;

  constructor(sinon)
  {
    this.getItem = sinon.stub(_localStorage, 'getItem');
  }
}
