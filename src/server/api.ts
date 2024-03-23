import { remultExpress } from 'remult/remult-express'
import { Task } from 'src/shared/task'

export const api = remultExpress({
    entities: [Task],
})