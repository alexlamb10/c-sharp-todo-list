import {Component} from '@angular/core';
import { TodoApiService } from '../todo-api/todo-api.service';



@Component({
  selector: 'tl-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {


  constructor(private _todos: TodoApiService) { }

  todos$ = this.initializeTodos();

  initializeTodos () {
    return this._todos.getTodos()
  }
  addItem(todo: string): void {
    console.log({todo})
    this._todos.createTodo(todo).subscribe();
    this.todos$ = this.initializeTodos();
  }
}
