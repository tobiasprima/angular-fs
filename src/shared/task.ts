import { Allow, Entity, Fields } from "remult";

@Entity('task', {
    allowApiCrud: Allow.authenticated(),
    allowApiDelete: 'admin',
    allowApiInsert: 'admin',
})
export class Task{
    @Fields.autoIncrement()
    id =0;
    @Fields.string<Task>({
        validate:task=> {
            if(task.title.length< 3) {
                throw new Error('Too short')
            }
        }
    })
    title='';
    @Fields.boolean()
    completed = false;
}

