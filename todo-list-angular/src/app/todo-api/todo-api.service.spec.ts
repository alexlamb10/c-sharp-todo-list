import { TestBed } from '@angular/core/testing';

import { TodoApiService } from './todo-api.service';
import { HttpClient } from '@angular/common/http';

describe('TodoApiService', () => {
  let component: TodoApiService;
  let mockHttpClient: HttpClient

  beforeEach(() => {
    component = new TodoApiService(mockHttpClient);
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
