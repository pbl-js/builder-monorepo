import { IDraftData, StrapiDraftDataResponse } from '@bob-types';

function convertDraft({ draft }: StrapiDraftDataResponse): IDraftData {
  const convertedDraft: IDraftData = {
    id: draft.data.id,
    name: draft.data.attributes.name,
    components: draft.data.attributes.content.components.map(
      ({ componentType, parentId, layerName, style, inputs, jsxName, id }) => {
        return {
          id,
          componentType,
          parentId,
          layerName,
          style,
          inputs,
          jsxName,
        };
      }
    ),
  };

  return convertedDraft;
}

export { convertDraft };
