import { ObjectType, Field, Int, registerEnumType } from 'type-graphql';
import { ComponentType } from './component.types';

registerEnumType(ComponentType, {
  name: 'ComponentType',
  description: undefined,
});

@ObjectType()
export class Component {
  @Field(() => String)
  id: number;

  @Field(() => ComponentType)
  componentType: ComponentType;

  @Field(() => Int)
  sectionId: number;

  @Field(() => String)
  props?: string;
}
