import { AddComponentPayload, IDraftData } from '@bob-types';

export const addComponentAction = (
  state: IDraftData,
  payload: AddComponentPayload
): IDraftData => {
  return {
    ...state,
    components: [...state.components, payload.componentData],
  };
};
