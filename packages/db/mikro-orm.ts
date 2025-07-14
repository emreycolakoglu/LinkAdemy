import { Options } from "@mikro-orm/core";
import { User } from "./entities/User";
import { Book } from "./entities/Book";

const config: Options = {
  dbName: "",
  type: "sqlite",
  entities: [User, Book],
  debug: process.env.DEBUG === "true" || process.env.DEBUG?.includes("db"),
};

export default config;
