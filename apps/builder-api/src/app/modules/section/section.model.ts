import { ObjectType, Field } from 'type-graphql';
import { Component } from '../component/component.model';
import { IComponent } from '../component/component.types';

@ObjectType()
export class Section {
  @Field(() => String)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  destinationUrl: string;

  @Field(() => [Component])
  components?: IComponent[];
}
