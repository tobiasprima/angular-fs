import { Allow, Entity, Fields } from "remult";

@Entity('task', {
    allowApiCrud: Allow.authenticated,
    allowApiDelete: 'admin',
    allowApiInsert: 'admin',
})
export class Task{
    @Fields.cuid()
    id = '';
    @Fields.string<Task>({
        validate: (task)=> {
            if(task.title.length< 3) {
                throw new Error('Too short')
            }
        },
        allowApiUpdate: 'admin'
    })
    title='';
    @Fields.boolean()
    completed = false;

    @Fields.createdAt()
    createdAt?: Date;
}

