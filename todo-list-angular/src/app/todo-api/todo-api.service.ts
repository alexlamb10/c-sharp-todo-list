import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  list: Observable<any[]> | any;

  constructor(private _http: HttpClient) { }
  baseURL = 'http://localhost:5137'

  getTodos(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseURL}/todoItems`)
  }

  createTodo(todo: any) {
    console.log({todo})
    return this._http.post<any[]>(`${this.baseURL}/addTodo`, {todo})
  }
}
