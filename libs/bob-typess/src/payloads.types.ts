import { IDraftComponentData } from './types';

export interface UpdateComponentPayload {
  componentData: IDraftComponentData;
}

export interface DeleteComponentPayload {
  componentId: number;
}

export interface AddComponentPayload {
  componentData: IDraftComponentData;
}
