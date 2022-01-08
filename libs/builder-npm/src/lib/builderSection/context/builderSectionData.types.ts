import {
  AddComponentPayload,
  DeleteComponentPayload,
  ICustomComponent,
  IDraftData,
  SetDraftDataPayload,
  UpdateComponentPayload,
} from '@bob-types';

export interface BuilderSectionDataState {
  draft: IDraftData;
  isComunicationOpen: boolean;
  registeredComponents: ICustomComponent[];
}

export interface IBuilderSectionDataContext {
  state: BuilderSectionDataState;
  dispatch: React.Dispatch<BuilderSectionDataAction>;
}

// Reducer
export enum BuilderSectionDataActionKindEnum {
  OPEN_COMUNICATION = 'open-comunication',
  SET_DRAFT_DATA = 'set-draft-data',
  UPDATE_COMPONENT = 'update-component',
  ADD_COMPONENT = 'add-component',
  DELETE_COMPONENT = 'delete-component',
}

export interface BuilderSectionDataAction_OpenComunication {
  type: BuilderSectionDataActionKindEnum.OPEN_COMUNICATION;
}

export interface BuilderSectionDataAction_SetDraftData {
  type: BuilderSectionDataActionKindEnum.SET_DRAFT_DATA;
  payload: SetDraftDataPayload;
}

export interface BuilderSectionDataAction_AddComponent {
  type: BuilderSectionDataActionKindEnum.ADD_COMPONENT;
  payload: AddComponentPayload;
}

export interface BuilderSectionDataAction_DeleteComponent {
  type: BuilderSectionDataActionKindEnum.DELETE_COMPONENT;
  payload: DeleteComponentPayload;
}

export interface BuilderSectionDataAction_UpdateComponent {
  type: BuilderSectionDataActionKindEnum.UPDATE_COMPONENT;
  payload: UpdateComponentPayload;
}

export type BuilderSectionDataAction =
  | BuilderSectionDataAction_SetDraftData
  | BuilderSectionDataAction_OpenComunication
  | BuilderSectionDataAction_AddComponent
  | BuilderSectionDataAction_DeleteComponent
  | BuilderSectionDataAction_UpdateComponent;
