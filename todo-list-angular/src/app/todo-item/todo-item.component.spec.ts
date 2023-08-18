import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;

  beforeEach(() => {
    component = new TodoItemComponent();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
