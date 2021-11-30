export enum ComponentType {
  TEXT = 'TEXT',
  WRAPPER = 'WRAPPER',
}

export interface IComponentProps {
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
}

export interface ComponentOrder {
  componentId: number;
  componentType: ComponentType;
  components: this[];
  style: Partial<IComponentProps>;
}

export type componentOrderType = ComponentOrder[];

export const mockSectionData: componentOrderType = [
  {
    componentId: 1,
    componentType: ComponentType.WRAPPER,
    style: { backgroundColor: 'red' },
    components: [
      {
        componentId: 2,
        componentType: ComponentType.WRAPPER,
        style: { backgroundColor: 'blue' },
        components: [
          {
            componentId: 2,
            componentType: ComponentType.WRAPPER,
            style: { backgroundColor: 'green' },
            components: [],
          },
        ],
      },
      {
        componentId: 2,
        componentType: ComponentType.WRAPPER,
        style: { backgroundColor: 'green' },
        components: [
          {
            componentId: 2,
            componentType: ComponentType.TEXT,
            style: { backgroundColor: 'yellow' },
            components: [],
          },
        ],
      },
    ],
  },
];
