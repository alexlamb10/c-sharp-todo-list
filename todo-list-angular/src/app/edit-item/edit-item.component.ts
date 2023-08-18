import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoApiService } from '../todo-api/todo-api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'tl-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  item$: BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor(private _route: ActivatedRoute, private _todos: TodoApiService) { }

  singleItem = '';
  id = this._route.snapshot.params['id'];
  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this._todos.getTodoById(id).pipe(
      ).subscribe(list => this.item$.next(list));
  }

  updateItem(): void{

    this._todos.updateItem(+this.id, this.singleItem).subscribe((s) => {
      this.item$.next(s)
      alert("Item has been updated")
    })
  }

  todoItem(val:string){
    this.singleItem = val;
  }
}
