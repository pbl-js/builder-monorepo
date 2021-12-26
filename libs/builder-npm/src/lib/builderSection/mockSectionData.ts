import { ComponentType, IDraftData } from '@bob-typess';

export const mockSectionData: IDraftData = {
  id: 1,
  name: 'home-banner',
  components: [
    {
      id: 1,
      componentType: ComponentType.CUSTOM,
      jsxName: 'DEV-product-tile',
      layerName: 'first-custom-component',
      parentId: 'section',
      data: [
        {
          type: 'string',
          name: 'text',
          value: 'Komponent nr 1 - mock dane',
        },
        {
          type: 'number',
          name: 'price',
          value: 459,
        },
      ],
      style: {
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '10px',
        marginRight: '10px',
      },
    },
    {
      id: 2,
      componentType: ComponentType.CUSTOM,
      jsxName: 'DEV-product-tile',
      layerName: 'first-custom-component',
      parentId: 'section',
      data: [
        {
          type: 'string',
          name: 'text',
          value: 'Lorem ipsum dolor coś tam coś tam',
        },
        {
          type: 'number',
          name: 'price',
          value: 39.99,
        },
      ],
      style: {
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '10px',
        marginRight: '10px',
      },
    },
  ],
};
