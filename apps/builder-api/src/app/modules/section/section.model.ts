import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Section {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  siteUrl: string;
}
