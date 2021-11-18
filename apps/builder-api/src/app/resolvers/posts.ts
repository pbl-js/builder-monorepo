import { Ctx, Query, Resolver } from 'type-graphql';
import { Post } from './model';
import { MyCTX } from '../utils/types';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(@Ctx() { prisma }: MyCTX): Promise<Post[]> {
    return [{ id: 1, name: '', description: '' }];
  }
}
