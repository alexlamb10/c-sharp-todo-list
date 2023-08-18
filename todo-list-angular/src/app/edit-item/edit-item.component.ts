import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoApiService } from '../todo-api/todo-api.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'tl-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  id: any;

  item$: Observable<any> | undefined;
  constructor(private _route: ActivatedRoute, private _todos: TodoApiService) { }
  singleItem = '';
  ngOnInit(): void {
    this.item$ = this._route.params.pipe(
      switchMap((params: Params) => {
        return this._todos.getTodoById(params['id']);
      })
    )
  }
  updateItem(): void{
    if (this.singleItem === ''){
      alert('Please enter a value!')
    }else{
      this.item$ = this._todos.updateItem(+this.id, this.singleItem)
        alert("Task has been updated")
      }

  }

  todoItem(val:string){
    this.singleItem = val;
  }
}
