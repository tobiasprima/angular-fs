import { Component } from '@angular/core';
import { remult } from 'remult';
import { Task } from 'src/shared/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[] = []
  newTaskTitle= ''
  async addTask(){
    try {
      const newTask = await this.taskRepo.insert({
        title: this.newTaskTitle
      })
      this.tasks.push(newTask)
      this.newTaskTitle = '';
    } catch (error: any){
      alert(error.message)
    }
  }

  taskRepo = remult.repo(Task)

  ngOnInit(){
    this.taskRepo.find({where: {
      completed: undefined,
    }}).then((tasks)=> (this.tasks = tasks))
  }
}
