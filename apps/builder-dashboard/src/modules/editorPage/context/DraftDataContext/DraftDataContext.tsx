import { ComponentRectData, IDraftData, SectionRectData } from '@bob-types';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { UseDraft_API } from '../../utils/queries/getDraft/hooks';

type Action = { type: 'set-draft-data'; payload: { draftData: IDraftData } };
type Dispatch = (action: Action) => void;
type State = {
  history: IDraftData[];
};
type DraftDataProviderProps = { children: React.ReactNode };

const DraftDataContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function draftDataReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set-draft-data': {
      return {
        ...state,
        history: [...state.history, action.payload.draftData],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const DraftDataProvider = ({ children }: DraftDataProviderProps) => {
  const [state, dispatch] = useReducer(draftDataReducer, {
    history: [],
  });

  const { data } = UseDraft_API(1);

  useEffect(() => {
    console.log('Api rerender', data);
    if (data) {
      dispatch({ type: 'set-draft-data', payload: { draftData: data } });
    }
  }, [data]);

  const value = { state, dispatch };

  return (
    <DraftDataContext.Provider value={value}>
      {children}
    </DraftDataContext.Provider>
  );
};

const useDraftData = () => {
  const context = useContext(DraftDataContext);
  if (context === undefined) {
    throw new Error('useDraftData must be used within a DraftDataProvider');
  }
  return context;
};

const useDraftData_activeDraft = (): IDraftData | undefined => {
  const {
    state: { history },
  } = useDraftData();

  const res = history[history.length - 1];
  return res;
};

export { DraftDataProvider, useDraftData, useDraftData_activeDraft };
