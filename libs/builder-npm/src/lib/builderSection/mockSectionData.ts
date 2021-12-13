import { componentOrderType, ComponentType } from '../types/types';

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
