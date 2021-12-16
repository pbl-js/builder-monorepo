import { ICustomComponent, ISectionData } from './types';

export enum PostMessageType {
  REGISTER_COMPONENT = 'register-component',
  RENDER_COMPONENT = 'render-component',
  RENDER_SECTION = 'render-section',
}

export interface RegisterComponentPostMessage {
  messageType: PostMessageType.REGISTER_COMPONENT;
  messageData: ICustomComponent;
}

export interface RenderComponentPostMessage {
  messageType: PostMessageType.RENDER_COMPONENT;
  messageData: string;
}

export interface RenderSectionPostMessage {
  messageType: PostMessageType.RENDER_SECTION;
  messageData: ISectionData;
}

export type PostMessage =
  | RegisterComponentPostMessage
  | RenderSectionPostMessage
  | RenderComponentPostMessage;
