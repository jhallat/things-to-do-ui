import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IToDo } from './to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = "http://localhost:8080/todos";
  private todoUrl = "http://localhost:8080/todo";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>(this.todosUrl).pipe(
      tap(data => console.log("todos: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addTodo(newToDo: IToDo): Observable<IToDo> {
    return this.http.post<IToDo>(this.todoUrl, newToDo)
      .pipe(
        tap(data => console.log("todo: " + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return throwError(err.message);
  }
}
