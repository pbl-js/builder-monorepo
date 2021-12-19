import { IDraftComponentData, IDraftData } from '@bob-types';

export interface UpdateComponentPayload {
  componentId: number;
  componentData: IDraftData;
}

export interface DeleteComponentPayload {
  componentId: number;
}

export interface AddComponentPayload {
  componentData: IDraftComponentData;
}
