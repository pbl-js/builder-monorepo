import type { TypePolicies } from '@apollo/client';

export const typePolicies: TypePolicies = {
  StoreConfig: {
    keyFields: ['store_code'],
  },
  ComponentPropPropString: {
    keyFields: ['id'],
  },
  ComponentPropPropNumber: {
    keyFields: ['id'],
  },
  RegisteredComponentEntity: {
    keyFields: ['id'],
  },

  // RegisteredComponent: {
  //   keyFields: ['name'],
  // },
};
