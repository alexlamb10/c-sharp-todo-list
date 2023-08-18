import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  beforeEach(() => {
    component = new TodoFormComponent();
});

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
