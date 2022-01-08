import { IDraftData, StrapiDraftDataResponse } from '@bob-types';

function convertDraft({ draft }: StrapiDraftDataResponse): IDraftData {
  const convertedDraft: IDraftData = {
    id: draft.data.id,
    name: draft.data.attributes.name,
    components: draft.data.attributes.components.data.map(
      ({ id, attributes }) => {
        const { componentType, parentId, layerName, style, props, jsxName } =
          attributes;
        return {
          id,
          componentType,
          parentId,
          layerName,
          style,
          props,
          jsxName,
        };
      }
    ),
  };

  return convertedDraft;
}

export { convertDraft };
