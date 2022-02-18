import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class OriginComponent {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
