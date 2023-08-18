import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tl-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Output() markAsComplete:EventEmitter<any> = new EventEmitter;
  @Output() deleteTask:EventEmitter<any> = new EventEmitter;
  @Input() item: any

  constructor () { }

  MarkAsComplete(id: any): void {
    this.markAsComplete.emit(id)
  }
  DeleteTask(id: any): void {
    this.deleteTask.emit(id)
  }
}
