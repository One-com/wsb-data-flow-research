/* @flow */

import { isTestEnv } from '../env/isEnv';

const getRndTime = () => Math.round(Math.random() * 1500);

class WsbStorage
{
  #storage: Object = localStorage;

  get<R: Object = Object>(key: string): Promise<R | null> {
    return this._promisify(() => {
      const val = this.#storage.getItem(key);
      return val === undefined || val === null ? null : JSON.parse(val);
    });
  }

  set(key: string, val: any): Promise<*> {
    return this._promisify(() => this.#storage.setItem(key, JSON.stringify(val)));
  }

  _promisify(fn: Function) {
    try {
      const val = fn();
      if (isTestEnv()) {
        return Promise.resolve(val);
      }
      return new Promise(resolve => setTimeout(
        () => resolve(val),
        getRndTime(),
      ))
    } catch (e) {
      if (isTestEnv()) {
        return Promise.reject(e);
      }
      return new Promise((_, reject) => setTimeout(
        () => reject(e),
        getRndTime(),
      ))
    }
  }
}

export const storageService = new WsbStorage();
