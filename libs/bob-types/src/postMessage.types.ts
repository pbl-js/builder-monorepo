import { ICustomComponent } from './types';

export enum PostMessageType {
  REGISTER_COMPONENT = 'register-component',
  RENDER_COMPONENT = 'render-component',
}

export interface RegisterComponentPostMessage {
  messageType: PostMessageType.REGISTER_COMPONENT;
  messageData: ICustomComponent;
}

export interface RenderComponentPostMessage {
  messageType: PostMessageType.RENDER_COMPONENT;
  messageData: string;
}

export type PostMessage =
  | RegisterComponentPostMessage
  | RenderComponentPostMessage;
