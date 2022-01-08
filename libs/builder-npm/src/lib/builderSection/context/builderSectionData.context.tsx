import { createContext, useContext, useEffect, useReducer } from 'react';
import { mockSectionData } from '../mockSectionData';
import { builderSectionDataReducer } from './builderSectionData.reducer';
import { IBuilderSectionDataContext } from './builderSectionData.types';
import { BOB } from '../../utils/bob';
import { fetchDraft } from '../api/fetchDraft';

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

  useEffect(() => {
    (async () => {
      const data = await fetchDraft('1');
      console.log(data);
    })();
  }, []);

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
