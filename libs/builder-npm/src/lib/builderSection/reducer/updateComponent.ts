import { IDraftData, UpdateComponentPayload } from '@bob-types';

export const updateComponentAction = (
  state: IDraftData,
  payload: UpdateComponentPayload
): IDraftData => {
  const newComponentData = payload.componentData;

  const components = state.components.map((item) => {
    if (item.id === newComponentData.id) {
      return newComponentData;
    }
    return item;
  });

  return {
    ...state,
    components,
  };
};
