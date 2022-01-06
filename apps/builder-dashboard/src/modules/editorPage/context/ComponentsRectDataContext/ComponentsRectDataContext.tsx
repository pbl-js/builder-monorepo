import { ComponentRectData } from '@bob-types';
import { createContext, useContext, useReducer } from 'react';

type Action = { type: 'add-data' } | { type: 'remove-data' };
type Dispatch = (action: Action) => void;
type State = { componentsRectData: ComponentRectData[] };
type ComponentsRectDataProviderProps = { children: React.ReactNode };

const ComponentsRectDataContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function componentsRectDataReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add-data': {
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const ComponentsRectDataProvider = ({
  children,
}: ComponentsRectDataProviderProps) => {
  const [state, dispatch] = useReducer(componentsRectDataReducer, {
    componentsRectData: [],
  });
  const value = { state, dispatch };

  return (
    <ComponentsRectDataContext.Provider value={value}>
      {children}
    </ComponentsRectDataContext.Provider>
  );
};

const useComponentsRectData = () => {
  const context = useContext(ComponentsRectDataContext);
  if (context === undefined) {
    throw new Error(
      'useComponentsRectData must be used within a ComponentsRectDataProvider'
    );
  }
  return context;
};

export { ComponentsRectDataProvider, useComponentsRectData };
