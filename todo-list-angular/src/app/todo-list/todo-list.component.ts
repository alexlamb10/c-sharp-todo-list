import { Component, Input } from '@angular/core';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoList: any[] | null = []

  determineTodoListLength() {
    return this.todoList ? this.todoList.length : 0;
  }
}
