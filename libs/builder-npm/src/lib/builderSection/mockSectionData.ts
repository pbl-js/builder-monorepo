import { ComponentType, IDraftData } from '@bob-typess';

// export const mockSectionData: componentOrderType = [
//   {
//     componentId: 1,
//     componentType: ComponentType.WRAPPER,
//     style: { backgroundColor: 'red' },
//     components: [
//       {
//         componentId: 2,
//         componentType: ComponentType.WRAPPER,
//         style: { backgroundColor: 'blue' },
//         components: [
//           {
//             componentId: 3,
//             componentType: ComponentType.WRAPPER,
//             style: { backgroundColor: 'green' },
//             components: [],
//           },
//         ],
//       },
//       {
//         componentId: 4,
//         componentType: ComponentType.WRAPPER,
//         style: { backgroundColor: 'green' },
//         components: [
//           {
//             componentId: 5,
//             componentType: ComponentType.TEXT,
//             style: { backgroundColor: 'yellow' },
//             components: [],
//           },
//           {
//             componentId: 6,
//             componentType: ComponentType.CUSTOM,
//             style: { backgroundColor: 'megenta' },
//             components: [],
//           },
//         ],
//       },
//     ],
//   },
// ];

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
      data: {
        text: 'Pierwszy komponent za płotent',
        price: 9999,
      },
      style: { paddingTop: '20px', paddingBottom: '20px' },
    },
    {
      id: 2,
      componentType: ComponentType.CUSTOM,
      jsxName: 'DEV-product-tile',
      layerName: 'first-custom-component',
      parentId: 'section',
      data: {
        text: 'Drugi komponent śmiga elegancko',
        price: 327,
      },
      style: {},
    },
  ],
};
