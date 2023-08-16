import { of } from 'rxjs';
import { HomeScreenComponent } from './home-screen.component';
import { TodoApiService } from '../todo-api/todo-api.service';

describe('HomeScreenComponent', () => {
  let component: HomeScreenComponent;
  let mockTodosService: TodoApiService;

  beforeEach(() => {
    mockTodosService = {
      getTodos: () => of([])
    } as unknown as TodoApiService;

    component = new HomeScreenComponent(mockTodosService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
