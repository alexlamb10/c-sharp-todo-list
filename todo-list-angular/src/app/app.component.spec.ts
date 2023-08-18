import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TodoApiService } from './todo-api/todo-api.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let mockTodosService: TodoApiService;

  beforeEach(() => {
    component = new AppComponent(mockTodosService)
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
