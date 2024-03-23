import { remultExpress } from 'remult/remult-express'
import { TasksController } from 'src/shared/TasksController'
import { Task } from 'src/shared/task'

export const api = remultExpress({
    entities: [Task],
    controllers: [TasksController]
})