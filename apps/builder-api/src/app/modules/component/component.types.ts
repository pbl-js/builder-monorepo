import { registerEnumType } from 'type-graphql';
import { ComponentType } from '@prisma/client';
// TODO: Ogarnąć o co biega. Dlaczego to działa tylko w pliku types.d
// export const ComponentType = {
//   TEXT: 'TEXT',
//   IMAGE: 'IMAGE',
//   CUSTOM: 'CUSTOM',
// };
registerEnumType(ComponentType, {
  name: 'ComponentType',
  description: undefined,
});

export interface IComponent {
  id: number;
  componentType: ComponentType;
  sectionId: number;
}

export { ComponentType };
