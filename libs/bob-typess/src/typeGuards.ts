import {
  Strapi_DraftComponent_DataItem,
  Strapi_DraftComponent_DataItem_Number,
  Strapi_DraftComponent_DataItem_String,
} from './strapi';
import {
  DraftComponent_DataItem,
  DraftComponent_DataItem_Number,
  DraftComponent_DataItem_String,
} from './types';

export function isStringProp_strapi(
  props: Strapi_DraftComponent_DataItem
): props is Strapi_DraftComponent_DataItem_String {
  return (
    (props as Strapi_DraftComponent_DataItem_String).valueString !== undefined
  );
}

export function isStringProp(
  props: DraftComponent_DataItem
): props is DraftComponent_DataItem_String {
  return (props as DraftComponent_DataItem_String).valueString !== undefined;
}

export function isNumberProp_strapi(
  props: Strapi_DraftComponent_DataItem
): props is Strapi_DraftComponent_DataItem_Number {
  return (
    (props as Strapi_DraftComponent_DataItem_Number).valueNumber !== undefined
  );
}

export function isNumberProp(
  props: DraftComponent_DataItem
): props is DraftComponent_DataItem_Number {
  return (props as DraftComponent_DataItem_Number).valueNumber !== undefined;
}
