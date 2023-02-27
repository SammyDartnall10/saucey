// const Fastify = require('fastify');
const Fastify = require('fastify');
const mercurius = require('mercurius');
const { getDriver, initDriver } = require('./server/neo4j')
const { getSauces } = require('./lib/getSauces');
const { addSauces } = require('./lib/addSauces');

const schema = `
  type Query {
    hello(name: String): String!
    sauce(name: String): [Sauce]
    user: User
  }
  type Sauce {
    name: String! 
    maker: String!
    location: String
    createdBy: [User]
  }
  type User {
    name: String
    sauces: [Sauce]
  }
  input addSauce {
    name: String! 
    maker: String!
    location: String
    createdBy: [addUser]
  }
  input addUser {
    name: String
    sauces: [addSauce]
  }
  type Mutation {
    addSauce(params: addSauce!): Sauce
  }
`;

const resolvers = {
  Query: {
    hello: async (_, { args }, { context }, info) => `hello world'}`,
    sauce: async (_, { name }, { context }, info) => getSauces(name),
    user: async () => `Hi Sammy`
  },
  Mutation: {
    addSauce: async (_, { params }) => addSauces(params)
  },
};


initDriver(process.env.DATABASE_URI, process.env.NEO_USER, process.env.NEO_PASSWORD)

const app = Fastify();
app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
  // context() {
  //   // dbstuff
  // },
});

app.listen(3000).then(() => {
  console.log(`🚀 Server ready at port 3000`);
});

