import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const cors = {
  origin: ['https://studio.apollographql.com','https://curly-trout-9449465v76pfpg5g.github.dev'], // 특정 도메인만 허용
  credentials: true
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors
});


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
