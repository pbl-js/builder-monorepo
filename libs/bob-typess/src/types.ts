import { BOBInputData } from './inputs.types';

export enum ComponentType {
  TEXT = 'TEXT',
  WRAPPER = 'WRAPPER',
  CUSTOM = 'CUSTOM',
}

export type ComponentStyles = Partial<{
  width: string;
  height: string;

  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;

  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;

  top: string;
  right: string;
  bottom: string;
  left: string;

  backgroundColor: string;
  color: string;
  borderColor: string;
}>;

export interface ICustomComponent {
  componentType: ComponentType.CUSTOM;
  jsxElement: any;
  name: string;
  layerName: string;

  style: ComponentStyles;
  data: BOBInputData[];
}

export interface ComponentOrder {
  componentId: number;
  componentType: ComponentType;
  components: this[];
  style: ComponentStyles;
}

export type componentOrderType = ComponentOrder[];

// ----------------------------------------------------------------------------------------
// Section

export interface IDraftComponentData {
  id: number;
  componentType: ComponentType.CUSTOM;
  jsxName: string;
  layerName: string;
  domData?: DOMRect;

  parentId: 'section' | number | null;
  style: ComponentStyles;
  data: {
    [key: string]: string | number;
  };
}

export interface IDraftData {
  id: number;
  name: string;
  domData?: DOMRect;
  components: IDraftComponentData[];
}

// export interface ISectionData {
//   id: number;
//   name: string;
//   components: ICustomComponent[];
//   domData: DOMRect;
// }
