import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tl-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() addItem:EventEmitter<string> = new EventEmitter

  singleItem = '';
  constructor() { }
  AddItem(): void{
    if(this.singleItem === ''){
      return
    }else{
      this.addItem.emit(this.singleItem)
      this.singleItem = '';

    }
  }

  todoItem(val:string){
    this.singleItem = val;
  }
}
