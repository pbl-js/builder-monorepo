import { createContext, useContext, useReducer } from 'react';
import { mockSectionData } from '../mockSectionData';
import { builderSectionDataReducer } from './builderSectionData.reducer';
import { IBuilderSectionDataContext } from './builderSectionData.types';
import { BOB } from '../../utils/bob';

export const initialState: IBuilderSectionDataContext = {
  state: {
    draft: mockSectionData,
    isComunicationOpen: false,
    registeredComponents: BOB._customComponents,
  },
  dispatch: () => null,
};

const BuilderSectionDataContext = createContext(initialState);

const BuilderSectionDataContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    builderSectionDataReducer,
    initialState.state
  );
  console.log(state);
  return (
    <BuilderSectionDataContext.Provider value={{ state, dispatch }}>
      {children}
    </BuilderSectionDataContext.Provider>
  );
};

const useBuilderSectionData = (): IBuilderSectionDataContext => {
  const context = useContext(BuilderSectionDataContext);
  if (context === undefined) {
    throw new Error(
      'useBuilderSectionData must be used within a BuilderSectionDataContextProvider'
    );
  }
  return context;
};

export { BuilderSectionDataContextProvider, useBuilderSectionData };
