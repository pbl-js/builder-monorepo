import { useState } from 'react';

import {
  GlobalUiDataContext,
  globalUiDataInitialState,
} from './GlobalUiData.consts';
import { useGlobalUiDataState } from './GlobalUiData.hooks';
import { IGlobalUiDataContext } from './GlobalUiData.types';

const GlobalUiDataContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<IGlobalUiDataContext>(
    globalUiDataInitialState
  );

  return (
    <GlobalUiDataContext.Provider value={{ ...state, setState }}>
      {children}
    </GlobalUiDataContext.Provider>
  );
};

export { GlobalUiDataContextProvider, useGlobalUiDataState };
