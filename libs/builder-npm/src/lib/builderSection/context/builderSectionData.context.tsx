import { useReducer } from 'react';
import { mockSectionData } from '../mockSectionData';
import { BuilderSectionDataContext } from './builderSectionData.consts';
import { builderSectionDataReducer } from './builderSectionData.reducer';

export const BuilderSectionDataContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    builderSectionDataReducer,
    mockSectionData
  );

  return (
    <BuilderSectionDataContext.Provider value={state}>
      {children}
    </BuilderSectionDataContext.Provider>
  );
};
