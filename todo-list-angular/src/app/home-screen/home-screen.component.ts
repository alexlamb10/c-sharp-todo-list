import {Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoApiService } from '../todo-api/todo-api.service';



@Component({
  selector: 'tl-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {


  constructor(private _todos: TodoApiService) { }

  todos$ = this._todos.getTodos().pipe(
    )
}
