import { Component, Input } from '@angular/core';

@Component({
  selector: 'tl-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: any

  constructor () { }
}
