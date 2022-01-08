import { AddComponentPayload, UpdateComponentPayload } from '@bob-types';
import {
  BuilderSectionDataAction,
  BuilderSectionDataActionKindEnum,
  BuilderSectionDataState,
} from './builderSectionData.types';

const addComponentAction = (
  state: BuilderSectionDataState,
  payload: AddComponentPayload
): BuilderSectionDataState => {
  return {
    ...state,
    draft: {
      ...state.draft,
      components: [...state.draft.components, payload.componentData],
    },
  };
};

const updateComponentAction = (
  state: BuilderSectionDataState,
  payload: UpdateComponentPayload
): BuilderSectionDataState => {
  const newComponentData = payload.componentData;

  const components = state.draft.components.map((item) => {
    if (item.id === newComponentData.id) {
      return newComponentData;
    }
    return item;
  });

  return {
    ...state,
    draft: {
      ...state.draft,
      components,
    },
  };
};

const builderSectionDataReducer = (
  state: BuilderSectionDataState,
  action: BuilderSectionDataAction
): BuilderSectionDataState => {
  const { type } = action;

  if (type === BuilderSectionDataActionKindEnum.OPEN_COMUNICATION) {
    return { ...state, isComunicationOpen: true };
  }

  if (type === BuilderSectionDataActionKindEnum.SET_DRAFT_DATA) {
    return { ...state, draft: action.payload.draftData };
  }

  if (type === BuilderSectionDataActionKindEnum.ADD_COMPONENT) {
    return addComponentAction(state, action.payload);
  }

  if (type === BuilderSectionDataActionKindEnum.DELETE_COMPONENT) {
    return { ...state };
  }

  if (type === BuilderSectionDataActionKindEnum.UPDATE_COMPONENT) {
    return updateComponentAction(state, action.payload);
  }

  return state;
};

export { builderSectionDataReducer };
