import { IDraftComponentData, IDraftData } from './types';

export interface UpdateComponentPayload {
  componentData: IDraftComponentData;
}

export interface DeleteComponentPayload {
  componentId: number;
}

export interface AddComponentPayload {
  componentData: IDraftComponentData;
}

export interface SetDraftDataPayload {
  draftData: IDraftData;
}
