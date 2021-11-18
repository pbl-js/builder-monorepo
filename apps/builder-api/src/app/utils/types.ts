import { Prisma, PrismaClient } from '@prisma/client';

export type MyCTX = {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
};
