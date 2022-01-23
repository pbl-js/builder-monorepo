import { ComponentRectData, SectionRectData } from '@bob-types';
import { createContext, useContext, useReducer } from 'react';

type Action =
  | { type: 'add-section-data'; payload: SectionRectData }
  | { type: 'add-component-data'; payload: ComponentRectData }
  | { type: 'remove-data'; payload: ComponentRectData };
type Dispatch = (action: Action) => void;
type State = {
  componentsRectData: ComponentRectData[];
  sectionsRectData: SectionRectData[];
};
type ComponentsRectDataProviderProps = { children: React.ReactNode };

const ComponentsRectDataContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function componentsRectDataReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add-component-data': {
      const existedComponents = state.componentsRectData.filter(
        ({ componentId }) => componentId !== action.payload.componentId
      );

      return {
        ...state,
        componentsRectData: [...existedComponents, action.payload],
      };
    }
    case 'add-section-data': {
      const existedSections = state.sectionsRectData.filter(
        ({ sectionId }) => sectionId !== action.payload.sectionId
      );

      return {
        ...state,
        sectionsRectData: [...existedSections, action.payload],
      };
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
    sectionsRectData: [],
  });
  const value = { state, dispatch };
  console.log('rectData', state);
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
