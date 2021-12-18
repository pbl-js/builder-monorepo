import { IDraftData } from '@bob-types';
import {
  BuilderSectionDataAction,
  BuilderSectionDataActionKindEnum,
} from './builderSectionData.types';

export const builderSectionDataReducer = (
  state: IDraftData,
  action: BuilderSectionDataAction
) => {
  const { type, payload } = action;
  switch (type) {
    case BuilderSectionDataActionKindEnum.ADD_COMPONENT:
      return {
        ...state,
      };

    case BuilderSectionDataActionKindEnum.DELETE_COMPONENT:
      return {
        ...state,
      };

    case BuilderSectionDataActionKindEnum.UPDATE_COMPONENT:
      return {
        ...state,
      };

    default:
      return state;
  }
};
