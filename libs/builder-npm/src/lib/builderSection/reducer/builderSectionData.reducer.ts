import { IDraftData } from '@bob-types';
import {
  BuilderSectionDataAction,
  BuilderSectionDataActionKindEnum,
} from '../context/builderSectionData.types';
import { addComponentAction } from './addComponent';
import { updateComponentAction } from './updateComponent';

export const builderSectionDataReducer = (
  state: IDraftData,
  action: BuilderSectionDataAction
): IDraftData => {
  const { type } = action;

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
