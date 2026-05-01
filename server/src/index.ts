import dotenv from "dotenv"
dotenv.config()

import express from "express"
import connectToDB from "./database/database.js";
import { connectGraphQL } from "./graphql/graphql.js";
import { expressMiddleware } from '@as-integrations/express5';

const app = express();

connectToDB();

const graphqlServer = connectGraphQL();
await graphqlServer.start();

app.use(express.json());
app.use("/graphql", expressMiddleware(graphqlServer));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000`));

