import { Ctx, Query, Resolver } from 'type-graphql';
import { MyContext } from '../../types';
import { OriginComponent } from './model';

@Resolver()
export class OriginComponentResolver {
  @Query(() => [OriginComponent])
  originComponents(@Ctx() ctx: MyContext) {
    return {};
  }
}
