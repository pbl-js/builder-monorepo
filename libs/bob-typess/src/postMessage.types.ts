import {
  AddComponentPayload,
  DeleteComponentPayload,
  UpdateComponentPayload,
} from './payloads.types';
import { ComponentRectData } from './renderComponents.types';
import {
  BobRect,
  ICustomComponent,
  IDraftComponentData,
  IDraftData,
} from './types';

export enum PostMessageType_ToDashboard {
  REGISTER_COMPONENT = 'register-component',
  SEND_COMPONENT_DOM_DATA = 'send-component-dom-data',
  RENDER_SECTION = 'render-section',
}

export interface PostMessage_ToDashboard_Registercomponent {
  messageType: PostMessageType_ToDashboard.REGISTER_COMPONENT;
  messageData: ICustomComponent;
}

export interface PostMessage_ToDashboard_SendComponentDomData {
  messageType: PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA;
  messageData: ComponentRectData;
}

export interface PostMessage_ToDashboard_RenderSection {
  messageType: PostMessageType_ToDashboard.RENDER_SECTION;
  messageData: IDraftData;
}

export type PostMessage_ToDashboard =
  | PostMessage_ToDashboard_Registercomponent
  | PostMessage_ToDashboard_RenderSection
  | PostMessage_ToDashboard_SendComponentDomData;

// Post message from Dashboard

export enum PostMessageType_FromDashboard {
  ADD_COMPONENT = 'add-component',
  UPDATE_COMPONENT = 'update-component',
  DELETE_COMPONENT = 'delete-component',
}

export interface PostMessage_FromDashboard_AddComponent {
  messageType: PostMessageType_FromDashboard.ADD_COMPONENT;
  messageData: AddComponentPayload;
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
  | PostMessage_FromDashboard_AddComponent
  | PostMessage_FromDashboard_UpdateComponent
  | PostMessage_FromDashboard_DeleteComponent;
