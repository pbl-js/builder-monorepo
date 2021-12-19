import { useContext } from 'react';

import { BuilderSectionDataContext } from './builderSectionData.consts';
import { IBuilderSectionDataContext } from './builderSectionData.types';

export const useBuilderSectionData = (): IBuilderSectionDataContext => {
  const context = useContext(BuilderSectionDataContext);
  if (context === undefined) {
    throw new Error(
      'useBuilderSectionData must be used within a BuilderSectionDataContextProvider'
    );
  }
  return context;
};
