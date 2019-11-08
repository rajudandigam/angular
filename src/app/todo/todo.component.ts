import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  taskList: {
    id: string,
    task: string,
    done: boolean
  }[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(taskName: any) {
    if(!taskName || this.taskList.find(task => task.task === taskName))
      return;

    this.taskList.push({
      id: `${taskName}${Math.random() * 1000}`,
      task: taskName,
      done: false
    });
  }

  toggleStatus(task: any) {
    task.done = !task.done;
  } 

}
