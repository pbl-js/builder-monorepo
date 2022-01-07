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
  jsxElement: any;
  name: string;
  style: ComponentStyles;
  data: DraftComponent_DataItem[];
}

export interface ICustomComponent_ApiPayload {
  registeredComponents: {
    name: string;
    style: ComponentStyles;
    data: DraftComponent_DataItem[];
  }[];
}

// ----------------------------------------------------------------------------------------
// Section

export interface DraftComponent_DataItem_String {
  name: string;
  valueString: string;
}

export interface DraftComponent_DataItem_Number {
  name: string;
  valueNumber: number;
}

export type DraftComponent_DataItem =
  | DraftComponent_DataItem_String
  | DraftComponent_DataItem_Number;

export interface IDraftComponentData {
  id: number;
  componentType: ComponentType.CUSTOM;
  jsxName: string;
  layerName: string;
  domData?: BobRect;

  parentId: 'section' | number | null;
  style: ComponentStyles;
  data: DraftComponent_DataItem[];
}

export interface IDraftData {
  id: number;
  name: string;
  domData?: DOMRect;
  components: IDraftComponentData[];
}
