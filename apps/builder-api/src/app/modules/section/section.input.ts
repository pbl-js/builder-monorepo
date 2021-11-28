import { Field, InputType } from 'type-graphql';
import { Section } from './section.model';

@InputType()
export class SectionInput implements Partial<Section> {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  destinationUrl?: string;
}
