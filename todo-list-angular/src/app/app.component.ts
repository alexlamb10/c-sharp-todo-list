import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoApiService } from './todo-api/todo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My To Do List';


  constructor(private _todos: TodoApiService) { }

  todos$ = this._todos.getTodos().pipe(
    ).subscribe(list => {return list})
}
