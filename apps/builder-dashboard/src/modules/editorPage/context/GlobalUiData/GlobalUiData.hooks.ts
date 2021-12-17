import { useContext } from 'react';
import { GlobalUiDataContext } from './GlobalUiData.consts';
import { IGlobalUiDataContext } from './GlobalUiData.types';

export const useGlobalUiDataState = (): IGlobalUiDataContext => {
  const context = useContext(GlobalUiDataContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalUiDataState must be used within a GlobalUiDataContextProvider'
    );
  }
  return context;
};
