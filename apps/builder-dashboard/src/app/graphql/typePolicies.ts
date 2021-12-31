import type { TypePolicies } from '@apollo/client';

export const typePolicies: TypePolicies = {
  StoreConfig: {
    keyFields: ['store_code'],
  },
};
