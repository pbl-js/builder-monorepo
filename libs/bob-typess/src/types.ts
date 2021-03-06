export enum ComponentType {
  TEXT = 'TEXT',
  WRAPPER = 'WRAPPER',
  CUSTOM = 'CUSTOM',
}

export type ComponentStyles = Partial<{
  width: number;
  height: number;

  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;

  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;

  top: number;
  right: number;
  bottom: number;
  left: number;

  backgroundColor: string;
  color: string;
  borderColor: string;
}>;

export type BobRect = Pick<
  DOMRectReadOnly,
  'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>;

export interface ICustomComponent {
  name: string;
  style: ComponentStyles;
  jsxElement: string;
  inputs: DraftComponent_DataItem[];
}

export interface ICustomComponent_ApiPayload {
  registeredComponents: {
    name: string;
    style: ComponentStyles;
    inputs: DraftComponent_DataItem[];
  }[];
}

// ----------------------------------------------------------------------------------------
// Section

export interface DraftComponent_DataItem_String {
  id: string;
  name: string;
  valueString: string;
}

export interface DraftComponent_DataItem_Number {
  id: string;
  name: string;
  valueNumber: number;
}

export type DraftComponent_DataItem =
  | DraftComponent_DataItem_String
  | DraftComponent_DataItem_Number;

export interface IDraftComponentData {
  id: string;
  componentType: ComponentType.CUSTOM;
  jsxName: string;
  layerName: string;
  domData?: BobRect;

  parentId: number;
  styles: ComponentStyles;
  inputs: DraftComponent_DataItem[];
}

export interface IDraftData {
  id: string;
  name: string;
  components: IDraftComponentData[];
}
