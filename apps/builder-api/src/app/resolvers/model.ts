import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description;
}
