import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  FieldResolver,
  Root,
  ResolverInterface,
} from 'type-graphql';
import { MyCTX } from '../../utils/types';
import { Component } from '../component/component.model';
import { Section } from './section.model';

@Resolver(() => Section)
export class SectionResolver implements ResolverInterface<Section> {
  @Mutation(() => Section)
  async createSection(
    @Arg('name', () => String) name: string,
    @Arg('destinationUrl', () => String) destinationUrl: string,
    @Ctx() { prisma }: MyCTX
  ): Promise<Section> {
    // TODO: Add validation, if section exist
    const section = await prisma.section.create({
      data: { destinationUrl, name },
    });
    return section;
  }

  @Query(() => [Section])
  async sections(@Ctx() { prisma }: MyCTX): Promise<Section[]> {
    const sections = await prisma.section.findMany({
      include: { components: true },
    });
    return sections;
  }

  @FieldResolver()
  async components(
    @Root() section: Section,
    @Ctx() { prisma }: MyCTX
  ): Promise<Component[]> {
    const sectionHasComponents = section?.components?.length > 0;

    if (sectionHasComponents) {
      const componentsId = section.components.map(({ id }) => id);
      const components = await prisma.component.findMany({
        where: { id: { in: componentsId } },
      });
      return components;
    }

    return [];
  }
}
