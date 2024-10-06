import winston from "winston";
import path from "path";
import fs from "fs";

const logDir = "logs";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

export const logger = winston.createLogger({
  level: "debug",
  format: logFormat,
  transports: [
    new winston.transports.File({
      filename: path.join(logDir, "debug.log"),
      level: "debug",
    }),
    new winston.transports.File({
      filename: path.join(logDir, "info.log"),
      level: "info",
    }),
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}
