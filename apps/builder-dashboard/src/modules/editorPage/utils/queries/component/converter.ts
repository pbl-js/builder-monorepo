import {
  DraftComponent_DataItem,
  IDraftComponentData,
  isNumberProp,
  isNumberProp_strapi,
  isStringProp,
  isStringProp_strapi,
  StrapiUpdateComponentDataResponse,
  Strapi_DraftComponent_DataItem,
} from '@bob-types';

export const convertInput_fromStrapi = (
  input: Strapi_DraftComponent_DataItem
): DraftComponent_DataItem => {
  if (isStringProp_strapi(input)) {
    return {
      id: input.id,
      name: input.name,
      valueString: input.valueString,
    };
  }

  if (isNumberProp_strapi(input)) {
    return {
      id: input.id,
      name: input.name,
      valueNumber: input.valueNumber,
    };
  }

  throw new Error('Function convertInput_fromStrapi gots unknown input type');
};

export const convertInput_toStrapi = (
  input: DraftComponent_DataItem
): Strapi_DraftComponent_DataItem => {
  if (isStringProp(input)) {
    return {
      __typename: 'ComponentPropsStringProp',
      ...input,
    };
  }

  if (isNumberProp(input)) {
    return {
      __typename: 'ComponentPropsNumberProp',
      ...input,
    };
  }

  throw new Error('Function convertInput_fromStrapi gots unknown input type');
};

export const convertManyInputs_toStrapi = (
  inputs: DraftComponent_DataItem[]
): Strapi_DraftComponent_DataItem[] => {
  return inputs.map((input) => convertInput_toStrapi(input));
};

export const convertUpdateComponent = ({
  updateComponent: {
    data: { id, attributes },
  },
}: StrapiUpdateComponentDataResponse): IDraftComponentData => {
  const convertedComponent: IDraftComponentData = {
    id,
    ...attributes,
    inputs: attributes.inputs,
  };

  return convertedComponent;
};
