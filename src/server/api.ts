
import { configDotenv } from "dotenv";
import { createPostgresDataProvider } from 'remult/postgres';
import { remultExpress } from 'remult/remult-express';
import { TasksController } from 'src/shared/TasksController';
import { Task } from 'src/shared/task';

configDotenv();

export const api = remultExpress({
    entities: [Task],
    controllers: [TasksController],
    getUser: (req) => req.session!['user'],
    dataProvider: createPostgresDataProvider({
        connectionString: process.env['DATABASE_URL']
    }),
})