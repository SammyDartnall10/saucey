const Fastify = require('fastify');
const mercurius = require('mercurius');
const { getSauces } = require('./lib/getSauces');

const schema = `
  type Query {
    hello(name: String): String!
    sauce: String!
  }
  type Sassy {
  stassy: String
  }
`;

const resolvers = {
  Query: {
    hello: async (_, { args }, { context }, info) => `hello world'}`,
    // sauce: async (_, { url }) => getSauces(),
    sauce: async () => getSauces(),
    // sauce: (url) => {
    //   url: getSauces(url);
    // },
  },
  Sassy: {
    stassy: async () => 'hey Sassy',
  },
};

const app = Fastify();
app.register(mercurius, {
  schema,
  resolvers,
  // context() {
  //   // dbstuff
  // },
});

app.listen(3000);
