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

  createTodo(name: any) {
    return this._http.post<any[]>(`${this.baseURL}/addTodo`, {name})
  }

  markComplete(Id: number) {
    return this._http.put<any[]>(`${this.baseURL}/updateItem/${Id}`, {Id})
  }

  deleteTask(id: number) {
    return this._http.delete<any[]>(`${this.baseURL}/deleteTask/${id}`, {}).pipe(
      switchMap(() => this.getTodos()),
    )
  }
  getTodoById(id: any): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseURL}/getTodoById/${id}`, {})
  }
  updateItem(id: any,name: string): Observable<any[]> {
    return this._http.put<any[]>(`${this.baseURL}/updateItemById/${id}`, { name }).pipe(
      switchMap(() => this.getTodoById(id)),
    )
    }
}
