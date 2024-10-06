import "reflect-metadata";
import { DataSource, Logger } from "typeorm";
import { Sample } from "./entity/Sample";
import { config } from "./config";
import { logger } from "./utils/logger";

class TypeORMLogger implements Logger {
  logQuery(query: string, parameters?: any[]) {
    logger.debug(
      `query: ${query} ${
        parameters ? `-- PARAMETERS: ${JSON.stringify(parameters)}` : ""
      }`
    );
  }

  logQueryError(error: string | Error, query: string, parameters?: any[]) {
    logger.error(
      `query failed: ${query} ${
        parameters ? `-- PARAMETERS: ${JSON.stringify(parameters)}` : ""
      } -- ERROR: ${error}`
    );
  }

  logQuerySlow(time: number, query: string, parameters?: any[]) {
    logger.warn(
      `slow query (${time}ms): ${query} ${
        parameters ? `-- PARAMETERS: ${JSON.stringify(parameters)}` : ""
      }`
    );
  }

  logSchemaBuild(message: string) {
    logger.info(`schema build: ${message}`);
  }

  logMigration(message: string) {
    logger.info(`migration: ${message}`);
  }

  log(level: "log" | "info" | "warn", message: any) {
    switch (level) {
      case "log":
        logger.debug(message);
        break;
      case "info":
        logger.info(message);
        break;
      case "warn":
        logger.warn(message);
        break;
    }
  }
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  synchronize: false,
  logging: true,
  logger: new TypeORMLogger(),
  entities: [Sample],
  migrations: ["migrations/*.ts"],
  subscribers: [],
});
