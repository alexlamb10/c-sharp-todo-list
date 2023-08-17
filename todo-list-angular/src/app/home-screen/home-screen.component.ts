import {Component} from '@angular/core';
import { TodoApiService } from '../todo-api/todo-api.service';
import { BehaviorSubject, switchMap } from 'rxjs';



@Component({
  selector: 'tl-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  private refresh$: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private _todos: TodoApiService) {}

  todos$ = this.refresh$.asObservable().pipe(
      switchMap(() => {
          return this._todos.getTodos();
      })
  )

  markAsComplete(id: any): void {
    console.log("hit")
    this._todos.markComplete(id).subscribe(() => {
      const currentValue = this.refresh$.value;
        this.refresh$.next(currentValue + 1);
    })
  }

  addItem(todo: string): void {
    console.log({ todo });
    this._todos.createTodo(todo).subscribe(() => {
        const currentValue = this.refresh$.value;
        this.refresh$.next(currentValue + 1);
    });
}
}
