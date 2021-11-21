import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  FieldResolver,
  Root,
  InputType,
  Field,
  ResolverInterface,
} from 'type-graphql';
import { MyCTX } from '../../utils/types';
import { Component } from '../component/component.model';
import { Section } from './section.model';

@InputType({ description: 'Name of the section' })
class CreateSectionInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  destinationUrl: string;
}

@Resolver(() => Section)
export class SectionResolver implements ResolverInterface<Section> {
  @Query(() => [Section])
  async sections(@Ctx() { prisma }: MyCTX): Promise<Section[]> {
    const sections = await prisma.section.findMany();
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

  @Mutation(() => Section)
  async createSection(
    @Arg('name', () => String) name: string,
    @Arg('destinationUrl', () => String) destinationUrl: string,
    // @Arg('options') options: CreateSectionInput,
    @Ctx() { prisma }: MyCTX
  ): Promise<Section> {
    // TODO: Add validation, if section exist
    // const { destinationUrl, name } = options;
    const section = await prisma.section.create({
      data: { destinationUrl, name },
    });
    return section;
  }
}
