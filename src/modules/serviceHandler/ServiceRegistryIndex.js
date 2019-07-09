/* @flow */

import type { ServiceRegistryIndexT } from './types';
import { storageService } from '../../services/storageService';

export const ServiceRegistryName = {
  STORAGE: 'storage',
};

export const ServiceRegistryIndex: ServiceRegistryIndexT = {
  [ServiceRegistryName.STORAGE]: storageService,
};
