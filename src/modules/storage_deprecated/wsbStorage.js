/* @flow */

import { STORAGE_KEY } from './constants';
import { isTestEnv } from '../../env/isEnv';

const getRndTime = () => Math.round(Math.random() * 500);

class WsbStorage
{
  get<R: Object = Object>(): Promise<R | null> {
    if (isTestEnv()) {
      return Promise.resolve(this._getFromStorage());
    }

    return new Promise(resolve => setTimeout(
      () => resolve(this._getFromStorage()),
      getRndTime(),
    ));
  }
  
  put(data: Object = Object): Promise<boolean> {
    if (isTestEnv()) {
      return Promise.resolve(this._putToStorage(data));
    }
    
    return new Promise(resolve => setTimeout(
      () => resolve(this._putToStorage(data)),
      getRndTime(),
    ));
  }

  _getFromStorage() {
    const
      dataRaw = localStorage.getItem(STORAGE_KEY),
      data = dataRaw && JSON.parse(dataRaw) || null;

    return data;
  }
  
  _putToStorage(data: Object = Object): boolean {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  }
}

export const wsbStorage = new WsbStorage();
