import { Component, OnDestroy, OnInit } from '@angular/core';
import { remult } from 'remult';
import { TasksController } from 'src/shared/TasksController';
import { Task } from 'src/shared/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  tasks: Task[] = []
  newTaskTitle= ''
  async addTask(){
    try {
      await this.taskRepo.insert({
        title: this.newTaskTitle
      })
      this.newTaskTitle = '';
    } catch (error: any){
      alert(error.message)
    }
  }

  async deleteTask(task: Task){
    try{
      await this.taskRepo.delete(task)
    } catch (error: any){
      alert(error.message)
    }
  }

  async saveTask(task: Task) {
    try{
      await this.taskRepo.save(task)
    } catch (error: any){
      alert(error.message)
    }
  }
  
  taskRepo = remult.repo(Task)
  unSub = () => {}

  ngOnInit(){
    this.unSub = this.taskRepo.liveQuery({where: {
      completed: undefined,
    }})
    .subscribe((info) => (this.tasks = info.applyChanges(this.tasks)))
  }

  ngOnDestroy(){
    this.unSub()
  }

 async setAllCompleted(completed: boolean){
  await TasksController.setAllCompleted(completed)
 }
}
