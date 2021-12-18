import { IDraftData } from '@bob-types';

export enum BuilderSectionDataActionKindEnum {
  UPDATE_COMPONENT = 'update-component',
  ADD_COMPONENT = 'add-component',
  DELETE_COMPONENT = 'delete-component',
}

export interface BuilderSectionDataAction_AddComponent {
  type: BuilderSectionDataActionKindEnum.ADD_COMPONENT;
  payload: {
    componentData: IDraftData;
    parentId: 'section' | number;
  };
}

export interface BuilderSectionDataAction_DeleteComponent {
  type: BuilderSectionDataActionKindEnum.DELETE_COMPONENT;
  payload: {
    componentId: number;
  };
}

export interface BuilderSectionDataAction_UpdateComponent {
  type: BuilderSectionDataActionKindEnum.UPDATE_COMPONENT;
  payload: {
    componentId: number;
    componentData: IDraftData;
  };
}

export type BuilderSectionDataAction =
  | BuilderSectionDataAction_AddComponent
  | BuilderSectionDataAction_DeleteComponent
  | BuilderSectionDataAction_UpdateComponent;
