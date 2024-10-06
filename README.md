# Node.js Express TypeScript Boilerplate

This is a boilerplate for creating Node.js microservices using Express and TypeScript. It includes a basic project structure, database integration with TypeORM and PostgreSQL, Redis for caching, and Docker support for easy deployment.

## Features

- Express.js web framework
- TypeScript for type-safe code
- TypeORM for database ORM
- PostgreSQL database
- Redis for caching
- Docker and docker-compose for containerization
- Winston for logging
- Environment variable configuration with dotenv

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 18 or higher)
- npm (usually comes with Node.js)
- Docker and docker-compose (for running the application in containers)
- Git (for cloning the repository)

## Getting Started

### Cloning the Repository

1. Open your terminal and run the following command to clone the repository:

   ```
   git clone https://github.com/your-username/node-express-typescript-boilerplate.git
   ```

2. Navigate to the project directory:

   ```
   cd node-express-typescript-boilerplate
   ```

### Setting Up the Project

1. Install the dependencies:

   ```
   npm install
   ```

2. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=boilerplate_db
   DB_USER=pguser
   DB_PASSWORD=password
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

   Adjust the values as needed for your environment.

### Running the Application

You can run the application either directly on your machine or using Docker.

#### Running Locally

1. Start the PostgreSQL and Redis services on your machine.
2. Run the database migrations:

   ```
   npm run migration:run
   ```

3. Start the application in development mode:

   ```
   npm run dev
   ```

The server will start on `http://localhost:3000`.

#### Running with Docker

1. Build and start the Docker containers:

   ```
   docker-compose up --build
   ```

This will start the application, PostgreSQL, and Redis containers. The server will be accessible at `http://localhost:3000`.

## Project Structure

```
.
├── src/
│   ├── controllers/
│   ├── entity/
│   ├── migrations/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   ├── config.ts
│   └── data-source.ts
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── README.md
└── tsconfig.json
```

## Customizing for Your Microservice

To adapt this boilerplate for your specific microservice:

1. Modify the `Sample` entity in `src/entity/Sample.ts` to match your data model.
2. Update or create new controllers in the `src/controllers/` directory.
3. Add or modify routes in `src/routes/` to match your API endpoints.
4. Implement your business logic in services under `src/services/`.
5. Add new migrations for any database schema changes.
6. Update the `config.ts` file if you need additional configuration options.
7. Modify the `Dockerfile` and `docker-compose.yml` if you need to change the deployment setup.

## Available Scripts

- `npm start`: Start the application
- `npm run dev`: Start the application in development mode with hot-reloading
- `npm run build`: Build the TypeScript code
- `npm run typeorm`: Run TypeORM CLI commands
- `npm run migration:generate`: Generate a new migration
- `npm run migration:run`: Run pending migrations
- `npm run migration:revert`: Revert the last migration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).
