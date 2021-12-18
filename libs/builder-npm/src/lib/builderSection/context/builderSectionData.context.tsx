import { useReducer } from 'react';
import { mockSectionData } from '../mockSectionData';
import {
  BuilderSectionActionsContext,
  BuilderSectionDataContext,
} from './builderSectionData.consts';
import { builderSectionDataReducer } from './builderSectionData.reducer';
import {
  AddComponentPayload,
  BuilderSectionDataActionKindEnum,
  DeleteComponentPayload,
  IBuilderSectionActionsContext,
  UpdateComponentPayload,
} from './builderSectionData.types';

export const BuilderSectionDataContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    builderSectionDataReducer,
    mockSectionData
  );

  const addComponent = (data: AddComponentPayload) => {
    dispatch({
      type: BuilderSectionDataActionKindEnum.ADD_COMPONENT,
      payload: data,
    });
  };

  const updateComponent = (data: UpdateComponentPayload) => {
    dispatch({
      type: BuilderSectionDataActionKindEnum.UPDATE_COMPONENT,
      payload: data,
    });
  };

  const deleteComponent = (data: DeleteComponentPayload) => {
    dispatch({
      type: BuilderSectionDataActionKindEnum.DELETE_COMPONENT,
      payload: data,
    });
  };

  const actions: IBuilderSectionActionsContext = {
    addComponent,
    updateComponent,
    deleteComponent,
  };

  return (
    <BuilderSectionDataContext.Provider value={state}>
      <BuilderSectionActionsContext.Provider value={actions}>
        {children}
      </BuilderSectionActionsContext.Provider>
    </BuilderSectionDataContext.Provider>
  );
};
