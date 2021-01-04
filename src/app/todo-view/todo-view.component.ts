import { Component, Input } from '@angular/core';

import { ITodo } from '../app.component';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent {
  @Input() public todos: Array<ITodo>;
  @Input() public toggleDone: (todo: ITodo) => void;
  @Input() public removeTodo: (todo: ITodo) => void;

  constructor() {
    this.todos = [];
    this.toggleDone = () => {};
    this.removeTodo = () => {};
  }
}
