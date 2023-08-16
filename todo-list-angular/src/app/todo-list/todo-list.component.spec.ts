import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;

  beforeEach(() => {
    component = new TodoListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the proper length for the todo list', () => {
    component.todoList = null;

    const result1 = component.determineTodoListLength();

    expect(result1).toBe(0);

    component.todoList = [{ title: 'something'}];

    const result2 = component.determineTodoListLength();

    expect(result2).toBe(1);
  })
});
