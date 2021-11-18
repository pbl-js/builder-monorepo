import { Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { MyCTX } from '../../utils/types';
import { Section } from './section.model';
import { SectionSchema } from './section.schema';

@Resolver()
export class SectionResolver {
  @Query(() => [Section])
  async sections(@Ctx() _: MyCTX): Promise<Section[]> {
    const sections = await SectionSchema.find();

    return sections.map(({ name, siteUrl, _id: id }) => ({
      id,
      name,
      siteUrl,
    }));
  }

  @Mutation(() => Section)
  async createSection(): Promise<Section> {
    const newSection = new SectionSchema({
      name: 'duupa',
      siteUrl: '/localhost',
    });
    const { _id: id, name, siteUrl } = await newSection.save();

    return { id, name, siteUrl };
  }
}
