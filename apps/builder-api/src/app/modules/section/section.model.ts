import { ObjectType, Field, Int } from 'type-graphql';
import { Component } from '../component/component.model';
import { IComponent } from '../component/component.types';

@ObjectType()
export class Section {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  destinationUrl: string;

  @Field()
  componentsOrder: string;

  @Field(() => [Component])
  components?: IComponent[];
}
