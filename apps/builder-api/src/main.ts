import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { connect } from 'mongoose';
import { SectionResolver } from './app/modules/section/section.resolver';
import { ComponentResolver } from './app/modules/component/component.resolver';

const main = async () => {
  const app = express();
  const prisma = new PrismaClient();

  await connect(process.env.MONGODB_URL);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [SectionResolver, ComponentResolver],
    }),
    context: () => ({ prisma }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = process.env.BUILDER_API_PORT || 3333;
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
};

main().catch((err) => {
  console.log(err);
});
