import {
  IDraftData,
  isNumberProp,
  isStringProp,
  StrapiDraftDataResponse,
} from '@bob-types';

function convertDraft({ draft }: StrapiDraftDataResponse): IDraftData {
  const convertedDraft: IDraftData = {
    id: draft.data.id,
    name: draft.data.attributes.name,
    components: draft.data.attributes.components.data.map(
      ({
        id,
        attributes: {
          componentType,
          parentId,
          layerName,
          style,
          inputs,
          jsxName,
        },
      }) => {
        return {
          id,
          componentType,
          parentId,
          layerName,
          style,
          inputs: inputs.map((input) => {
            // TODO: You return full input here. Its bad
            if (input.__typename === 'ComponentPropsStringProp') {
              return input;
            }
            if (input.__typename === 'ComponentPropsNumberProp') {
              return input;
            }
            throw new Error('Error with convert prop input is BuilderSection');
          }),
          jsxName,
        };
      }
    ),
  };

  console.log('convertedDraft', convertedDraft);
  return convertedDraft;
}

export { convertDraft };
