import {
  AddComponentPayload,
  DeleteComponentPayload,
  SetDraftDataPayload,
  UpdateComponentPayload,
} from './payloads.types';
import { ComponentRectData, SectionRectData } from './renderComponents.types';
import {
  BobRect,
  ICustomComponent,
  ICustomComponent_ApiPayload,
  IDraftComponentData,
  IDraftData,
} from './types';

export enum PostMessageType_ToDashboard {
  REGISTER_COMPONENTS = 'register-components',
  SEND_COMPONENT_DOM_DATA = 'send-component-dom-data',
  RENDER_SECTION = 'render-section',
}

export interface PostMessage_ToDashboard_Registercomponents {
  messageType: PostMessageType_ToDashboard.REGISTER_COMPONENTS;
  messageData: ICustomComponent_ApiPayload;
}

export interface PostMessage_ToDashboard_SendComponentDomData {
  messageType: PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA;
  messageData: ComponentRectData;
}

export interface PostMessage_ToDashboard_RenderSection {
  messageType: PostMessageType_ToDashboard.RENDER_SECTION;
  messageData: SectionRectData;
}

export type PostMessage_ToDashboard =
  | PostMessage_ToDashboard_Registercomponents
  | PostMessage_ToDashboard_RenderSection
  | PostMessage_ToDashboard_SendComponentDomData;

// Post message from Dashboard

export enum PostMessageType_FromDashboard {
  OPEN_COMUNICATION = 'open-comunication',
  SET_DRAFT_DATA = 'set-draft-data',
  ADD_COMPONENT = 'add-component',
  UPDATE_COMPONENT = 'update-component',
  DELETE_COMPONENT = 'delete-component',
}

export interface PostMessage_FromDashboard_OpenComunication {
  messageType: PostMessageType_FromDashboard.OPEN_COMUNICATION;
}

export interface PostMessage_FromDashboard_AddComponent {
  messageType: PostMessageType_FromDashboard.ADD_COMPONENT;
  messageData: AddComponentPayload;
}

export interface PostMessage_FromDashboard_SetDraftData {
  messageType: PostMessageType_FromDashboard.SET_DRAFT_DATA;
  messageData: SetDraftDataPayload;
}

export interface PostMessage_FromDashboard_UpdateComponent {
  messageType: PostMessageType_FromDashboard.UPDATE_COMPONENT;
  messageData: UpdateComponentPayload;
}

export interface PostMessage_FromDashboard_DeleteComponent {
  messageType: PostMessageType_FromDashboard.DELETE_COMPONENT;
  messageData: DeleteComponentPayload;
}

export type PostMessage_FromDashboard =
  | PostMessage_FromDashboard_SetDraftData
  | PostMessage_FromDashboard_OpenComunication
  | PostMessage_FromDashboard_AddComponent
  | PostMessage_FromDashboard_UpdateComponent
  | PostMessage_FromDashboard_DeleteComponent;
