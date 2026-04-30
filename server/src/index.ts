import dotenv from "dotenv"
dotenv.config()

import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { schema } from "./graphql/schema/schema.js";
import connectToDB from "./database/database.js";
import { getAllUsers } from "./controllers/user.controller.js";
import { getAllProducts } from "./controllers/product.controller.js";
import { getAllCategories } from "./controllers/category.controller.js";

connectToDB();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      users: getAllUsers,
      products: getAllProducts,
      categories: getAllCategories,
    },
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
