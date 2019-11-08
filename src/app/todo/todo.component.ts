import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  taskName: string = '';
  taskList: {
    id: number,
    task: string,
    done: boolean
  }[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(event: any) {
    if(this.taskList.find(task => task.task === this.taskName))
      return;

    this.taskList.push({
      id: Math.random() * 1000,
      task: this.taskName,
      done: false
    });
    console.log(event);
  }

  toggleStatus(event: any) {
    console.log(event);
  } 

}
