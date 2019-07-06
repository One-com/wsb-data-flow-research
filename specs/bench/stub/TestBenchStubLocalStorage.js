/* @flow */

export class TestBenchStubLocalStorage
{
  #sinon;
  
  #$getItem;

  constructor(sinon)
  {
    this.#sinon = sinon;
  }
  
  get getItem() {
    if (!this.#$getItem) {
      this.#$getItem = this.#sinon.stub(window.localStorage, 'getItem');
    }
    return this.#$getItem;
  }
}
