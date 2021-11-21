import { registerEnumType } from 'type-graphql';
import { ISection } from '../section/section.types';

// TODO: Ogarnąć o co biega. Dlaczego to działa tylko w pliku types.d
export const ComponentType = {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  CUSTOM: 'CUSTOM',
};
registerEnumType(ComponentType, {
  name: 'ComponentType',
  description: undefined,
});

export type ComponentTypeEnum =
  typeof ComponentType[keyof typeof ComponentType];

export interface IComponent {
  id: number;
  componentType: ComponentTypeEnum;
}

// id            Int           @id @default(autoincrement())
// componentType ComponentType
// Section       Section?      @relation(fields: [sectionId], references: [id])
// sectionId     Int?
// props         Props?
