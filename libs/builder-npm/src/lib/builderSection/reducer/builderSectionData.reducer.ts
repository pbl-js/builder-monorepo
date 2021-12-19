import { IDraftData } from '@bob-types';
import {
  BuilderSectionDataAction,
  BuilderSectionDataActionKindEnum,
} from '../context/builderSectionData.types';
import { addComponentAction } from './addComponent';

export const builderSectionDataReducer = (
  state: IDraftData,
  action: BuilderSectionDataAction
): IDraftData => {
  const { type } = action;
  console.log('reducer');

  switch (action.type) {
    case BuilderSectionDataActionKindEnum.ADD_COMPONENT:
      return { ...state, name: 'elo' };
    default:
      break;
  }

  // if (type === BuilderSectionDataActionKindEnum.ADD_COMPONENT) {
  //   return addComponentAction(state, action.payload);
  // }

  // if (type === BuilderSectionDataActionKindEnum.DELETE_COMPONENT) {
  //   return { ...state };
  // }

  // if (type === BuilderSectionDataActionKindEnum.UPDATE_COMPONENT) {
  //   return { ...state };
  // }

  return state;
};
