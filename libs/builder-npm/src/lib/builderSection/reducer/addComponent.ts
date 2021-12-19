import { AddComponentPayload, IDraftData } from '@bob-types';

export const addComponentAction = (
  state: IDraftData,
  payload: AddComponentPayload
): IDraftData => {
  console.log('testakcji');
  return {
    ...state,
    components: [...state.components, payload.componentData],
  };
};
