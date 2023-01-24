const Fastify = require('fastify');
const mercurius = require('mercurius');
const { getSauces } = require('./lib/getSauces');

const schema = `
  type Query {
    hello(name: String): String!
    sauce(url: String): String!
  },
`;

const resolvers = {
  Query: {
    hello: async (_, { name }) => `hello world'}`,
    sauce: async (_, { url }) => getSauces(),
  },
};

const app = Fastify();
app.register(mercurius, {
  schema,
  resolvers,
});

app.listen(3000);
