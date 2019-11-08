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

  addTask() {
    this.taskList.push({
      id: Math.random() * 1000,
      task: this.taskName,
      done: false
    })
  }

}
