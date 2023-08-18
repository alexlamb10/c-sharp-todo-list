import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;

  beforeEach(() => {
    component = new TodoListComponent();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
