import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: Array<ITodo> = [];
  public todoTitle = new FormControl(
    '',
    Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(60),
      Validators.required,
    ])
  );

  public addTodo() {
    this.todos.push({ title: this.todoTitle.value, done: false });
    this.todoTitle.reset();
  }

  public toggleDone(todo: ITodo) {
    todo.done = !todo.done;
  }

  public removeTodo(todo: ITodo) {
    const index = this.todos.indexOf(todo);

    if (index != -1) {
      this.todos.splice(index, 1);
    }
  }
}

export interface ITodo {
  title: string;
  done: boolean;
}
