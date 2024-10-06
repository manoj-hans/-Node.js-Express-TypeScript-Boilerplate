import "dotenv/config";
import express from "express";
import { connectRedis } from "./utils/redis";
import { sampleRoutes } from "./routes/sampleRoutes";
import { logger } from "./utils/logger";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());

// Routes
app.use("/api/samples", sampleRoutes);

const startServer = async () => {
  try {
    // Initialize TypeORM Data Source
    await AppDataSource.initialize();
    logger.info("Database connection has been established successfully.");

    // Connect to Redis
    await connectRedis();

    // Start server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      logger.info(`Server is running on port ${port}`);
    });
  } catch (error) {
    logger.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
