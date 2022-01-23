import { createContext, useContext, useEffect, useReducer } from 'react';
import { mockSectionData } from '../mockSectionData';
import { builderSectionDataReducer } from './builderSectionData.reducer';
import {
  BuilderSectionDataActionKindEnum,
  IBuilderSectionDataContext,
} from './builderSectionData.types';
import { BOB } from '../../utils/bob';
import { fetchDraft } from '../api/fetchDraft';
import { convertDraft } from '../api/convertDraft';
import { isInsideIframe } from '../../utils/isInsideIframe';

export const initialState: IBuilderSectionDataContext = {
  state: {
    draft: undefined,
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
    if (!isInsideIframe && state.draft === undefined) {
      // TODO: Add possibility to pass data (serverside) to context
      (async () => {
        const data = await fetchDraft('1');
        const convertedData = convertDraft(data);
        dispatch({
          type: BuilderSectionDataActionKindEnum.SET_DRAFT_DATA,
          payload: { draftData: convertedData },
        });
      })();
    }
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
