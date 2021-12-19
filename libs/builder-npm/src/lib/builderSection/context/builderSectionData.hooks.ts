import { IDraftData } from '@bob-types';
import { useContext } from 'react';

import {
  BuilderSectionActionsContext,
  BuilderSectionDataContext,
} from './builderSectionData.consts';
import { IBuilderSectionActionsContext } from './builderSectionData.types';

export const useBuilderSectionData = (): IDraftData => {
  const context = useContext(BuilderSectionDataContext);
  if (context === undefined) {
    throw new Error(
      'useBuilderSectionData must be used within a BuilderSectionDataContextProvider'
    );
  }
  return context;
};

export const useBuilderSectionActions = (): IBuilderSectionActionsContext => {
  const context = useContext(BuilderSectionActionsContext);
  if (context === undefined) {
    throw new Error(
      'useBuilderSectionActions must be used within a BuilderSectionActionsContextProvider'
    );
  }
  return context;
};
