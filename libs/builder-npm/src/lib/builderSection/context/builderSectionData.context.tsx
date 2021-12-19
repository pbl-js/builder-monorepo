import { useReducer } from 'react';
import { mockSectionData } from '../mockSectionData';
import { builderSectionDataReducer } from '../reducer/builderSectionData.reducer';
import { BuilderSectionDataContext } from './builderSectionData.consts';
import { BuilderSectionDataAction } from './builderSectionData.types';

export const BuilderSectionDataContextProvider: React.FC = ({ children }) => {
  const [sectionData, dispatch] = useReducer(
    builderSectionDataReducer,
    mockSectionData
  );

  return (
    <BuilderSectionDataContext.Provider value={{ sectionData, dispatch }}>
      {children}
    </BuilderSectionDataContext.Provider>
  );
};
