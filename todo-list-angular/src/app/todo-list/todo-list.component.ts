import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoList: any[] | null = []
  @Output() markAsComplete:EventEmitter<any> = new EventEmitter;
  @Output() deleteTask:EventEmitter<any> = new EventEmitter
}
