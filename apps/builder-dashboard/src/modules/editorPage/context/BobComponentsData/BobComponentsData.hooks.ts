import { useContext } from 'react';

import { IBobComponentsDataContext } from './BobComponentsData.types';
import { BobComponentsDataContext } from './BobComponentsData.consts';

export const useBobComponentsData = (): IBobComponentsDataContext => {
  const context = useContext(BobComponentsDataContext);
  if (context === undefined) {
    throw new Error(
      'useBobComponentsData must be used within a BobComponentsDataProvider'
    );
  }
  return context;
};
