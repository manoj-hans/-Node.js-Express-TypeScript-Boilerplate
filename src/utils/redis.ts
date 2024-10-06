import { createClient } from "redis";
import { logger } from "./logger";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (err) => logger.error("Redis Client Error", err));

export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    logger.info("Connected to Redis");
  }
};

export const getCache = async (key: string) => {
  return await redisClient.get(key);
};

export const setCache = async (
  key: string,
  value: string,
  expireInSeconds?: number
) => {
  if (expireInSeconds) {
    await redisClient.setEx(key, expireInSeconds, value);
  } else {
    await redisClient.set(key, value);
  }
};
