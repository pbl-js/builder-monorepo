import {
  DraftComponent_DataItem,
  DraftComponent_DataItem_Number,
  DraftComponent_DataItem_String,
} from './types';

export function isStringProp(
  props: DraftComponent_DataItem
): props is DraftComponent_DataItem_String {
  return (props as DraftComponent_DataItem_String).valueString !== undefined;
}

export function isNumberProp(
  props: DraftComponent_DataItem
): props is DraftComponent_DataItem_Number {
  return (props as DraftComponent_DataItem_Number).valueNumber !== undefined;
}
