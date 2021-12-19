import {
  AddComponentPayload,
  DeleteComponentPayload,
  IDraftData,
  UpdateComponentPayload,
} from '@bob-types';
import {
  BuilderSectionActionsContext,
  BuilderSectionDataContext,
} from './builderSectionData.consts';
import {
  BuilderSectionDataAction,
  BuilderSectionDataActionKindEnum,
  IBuilderSectionActionsContext,
} from './builderSectionData.types';

export const BuilderSectionDataContextProvider: React.FC<{
  state: IDraftData;
  dispatch: React.Dispatch<BuilderSectionDataAction>;
}> = ({ children, state, dispatch }) => {
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
