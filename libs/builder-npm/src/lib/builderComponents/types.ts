export enum ComponentType {
  TEXT = 'TEXT',
  WRAPPER = 'WRAPPER',
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

export interface ComponentOrder {
  componentId: number;
  componentType: ComponentType;
  components: this[];
  style: ComponentStyles;
}

export type componentOrderType = ComponentOrder[];
