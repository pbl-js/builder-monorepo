import { IDraftData } from '@bob-types';
import { useContext } from 'react';

import { BuilderSectionDataContext } from './builderSectionData.consts';

export const useBuilderSectionData = (): IDraftData => {
  const context = useContext(BuilderSectionDataContext);
  if (context === undefined) {
    throw new Error(
      'useBuilderSectionData must be used within a BuilderSectionDataContextProvider'
    );
  }
  return context;
};
