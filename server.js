import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import cors from "cors";

const server = new GraphQLServer({
  schema
});

server.use(cors());

server.start({ port: 4000 }, () => {
  console.log("server running on http://localhost:4000");
});
console.log("hi");
