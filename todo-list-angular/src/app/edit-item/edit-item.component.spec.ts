import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemComponent } from './edit-item.component';
import { TodoApiService } from '../todo-api/todo-api.service';
import { of } from 'rxjs';

describe('EditItemComponent', () => {
  let component: EditItemComponent;
  let mockTodosService: TodoApiService;
  let mockActivateRoute: ActivatedRoute;

  beforeEach(() => {
    component = new EditItemComponent(mockActivateRoute, mockTodosService);
});

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
