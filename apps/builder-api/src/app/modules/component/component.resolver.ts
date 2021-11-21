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
import { MyCTX } from '../../utils/types';
import { Component } from './component.model';
import { ComponentType } from './component.types';

@Resolver(() => Component)
export class ComponentResolver {
  @Mutation(() => Component)
  async createComponent(
    @Arg('componentType', () => ComponentType) componentType: ComponentType,
    @Arg('sectionId', () => Int) sectionId: number,
    @Ctx() { prisma }: MyCTX
  ): Promise<Component> {
    // TODO: Add validation, if section exist
    const component = await prisma.component.create({
      data: { componentType, sectionId },
    });
    return component;
  }

  @Query(() => [Component])
  async components(@Ctx() { prisma }: MyCTX): Promise<Component[]> {
    const components = await prisma.component.findMany();
    return components;
  }
}
