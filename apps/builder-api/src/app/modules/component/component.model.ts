import { ObjectType, Field } from 'type-graphql';
import { ComponentType, ComponentTypeEnum } from './component.types';

@ObjectType()
export class Component {
  @Field(() => String)
  id: number;

  @Field(() => ComponentType)
  componentType: ComponentTypeEnum;
}
