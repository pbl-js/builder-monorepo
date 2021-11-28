import { Prisma } from '.prisma/client';
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  FieldResolver,
  Root,
  ResolverInterface,
  Int,
} from 'type-graphql';
import { formatSection } from '../../utils/formatSection';
import { MyCTX } from '../../utils/types';
import { Component } from '../component/component.model';
import { SectionInput } from './section.input';
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
    const componentsOrder = {} as Prisma.JsonObject;
    // const componentsOrderJson = JSON.stringify(componentsOrder);

    const createdSection = await prisma.section.create({
      data: { destinationUrl, name, componentsOrder },
    });

    return formatSection(createdSection);
  }

  @Query(() => [Section])
  async sections(@Ctx() { prisma }: MyCTX): Promise<Section[]> {
    const findedSections = await prisma.section.findMany({
      include: { components: true },
    });

    const sections: Section[] = findedSections.map((section) =>
      formatSection(section)
    );

    return sections;
  }

  // @Query(() => [Section])
  // async section(@Ctx() { prisma }: MyCTX): Promise<Section> {
  //   const sections = await prisma.section.findUnique({where: {}})
  //   return sections;
  // }

  @Mutation(() => Section)
  async updateSection(
    @Ctx() { prisma }: MyCTX,
    @Arg('sectionId', () => Int) sectionId: number,
    @Arg('data') data: SectionInput
  ): Promise<Section> {
    const existedSection = await prisma.section.findUnique({
      where: { id: sectionId },
    });

    const newSection = {
      ...existedSection,
      ...data,
    };

    const updatedSection = await prisma.section.update({
      where: { id: sectionId },
      data: newSection,
    });

    return formatSection(updatedSection);
  }

  @Mutation(() => Boolean)
  async deleteSection(
    @Ctx() { prisma }: MyCTX,
    @Arg('sectionId', () => Int) sectionId: number
  ): Promise<boolean> {
    const existedSection = await prisma.section.findUnique({
      where: { id: sectionId },
    });

    if (existedSection) {
      await prisma.section.delete({ where: { id: sectionId } });

      return true;
    }

    return false;
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
