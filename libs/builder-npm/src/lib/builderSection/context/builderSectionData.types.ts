import { IDraftData } from '@bob-types';

// Context
export interface IBuilderSectionActionsContext {
  addComponent: (data: AddComponentPayload) => void;
  updateComponent: (data: UpdateComponentPayload) => void;
  deleteComponent: (data: DeleteComponentPayload) => void;
}

// Reducer
export enum BuilderSectionDataActionKindEnum {
  UPDATE_COMPONENT = 'update-component',
  ADD_COMPONENT = 'add-component',
  DELETE_COMPONENT = 'delete-component',
}

export interface AddComponentPayload {
  componentData: IDraftData;
  parentId: 'section' | number;
}

export interface BuilderSectionDataAction_AddComponent {
  type: BuilderSectionDataActionKindEnum.ADD_COMPONENT;
  payload: AddComponentPayload;
}

export interface DeleteComponentPayload {
  componentId: number;
}

export interface BuilderSectionDataAction_DeleteComponent {
  type: BuilderSectionDataActionKindEnum.DELETE_COMPONENT;
  payload: DeleteComponentPayload;
}

export interface UpdateComponentPayload {
  componentId: number;
  componentData: IDraftData;
}

export interface BuilderSectionDataAction_UpdateComponent {
  type: BuilderSectionDataActionKindEnum.UPDATE_COMPONENT;
  payload: UpdateComponentPayload;
}

export type BuilderSectionDataAction =
  | BuilderSectionDataAction_AddComponent
  | BuilderSectionDataAction_DeleteComponent
  | BuilderSectionDataAction_UpdateComponent;
