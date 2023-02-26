const { Neo4jGraphQL } = require("@neo4j/graphql");
const Fastify = require('fastify');
const mercurius = require('mercurius');
const neo4j = require("neo4j-driver");
const { getSauces } = require('./lib/getSauces');

const typeDefs = `
  type Query {
    hello(name: String): String!
    sauce(name: String): [Sauce]
    user: User
  }
  type Sauce {
    name: String! 
    maker: String!
    location: String! 
  }
  type User {
    name: String
  }
  
`;

const resolvers = {
  Query: {
    hello: async (_, { args }, { context }, info) => `hello world'}`,
    // sauce: async (_, { url }) => getSauces(),
    sauce: async (_, { name }, { context }, info) => getSauces(name),
    user: () => `Hi Sammy`
  },
};



const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "saucydatabase")
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
  // const server = new ApolloServer({
  //     schema,
  // });

  const server = Fastify();
  server.register(mercurius, {
    schema,
    resolvers,
    graphiql: true,
    // context() {
    //   // dbstuff
    // },
  });

  server.listen(3000).then(() => {
    console.log(`🚀 Server ready at port 3000`);
  });

})

// app.listen(3000);

