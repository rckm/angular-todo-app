import { Component, Input } from '@angular/core';

import { ITodo } from '../app.component';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent {
  @Input() public todos: Array<ITodo>;
  @Input() public todo: ITodo | {};
  @Input() public toggleDone: Function;
  @Input() public removeTodo: Function;

  constructor() {
    this.todos = [];
    this.todo = {};
    this.toggleDone = () => {};
    this.removeTodo = () => {};
  }
}
