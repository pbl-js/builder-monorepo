import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { OriginComponentResolver } from './app/modules/originComponent/resolver';
import { MyContext } from './app/types';

const main = async () => {
  const app = express();

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to builder-api-express!' });
  });

  const apolloServer = await new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, OriginComponentResolver],
      validate: false,
    }),
    // This context will be avaible for all resolvers
    context: ({ req, res }): MyContext => ({ test: 'elo' }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = process.env.port || 1111;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
};

main();
