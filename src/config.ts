import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: parseInt(process.env.DB_PORT || "5432"),
  dbName: process.env.DB_NAME || "boilerplate_db",
  dbUser: process.env.DB_USER || "pguser",
  dbPassword: process.env.DB_PASSWORD || "password",
  redisHost: process.env.REDIS_HOST || "localhost",
  redisPort: parseInt(process.env.REDIS_PORT || "6379"),
};
