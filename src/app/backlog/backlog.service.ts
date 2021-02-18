import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IBacklog } from './backlog';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {
  private backlogsUrl = "http://localhost:8080/backlogs";
  private backlogUrl = "http://localhost:8080/backlog";

  constructor(private http: HttpClient) { }

  getBacklogs(): Observable<IBacklog[]> {
    return this.http.get<IBacklog[]>(this.backlogsUrl).pipe(
      tap(data => console.log("backlogs: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addBacklog(newBacklog: IBacklog): Observable<IBacklog> {
    return this.http.post<IBacklog>(this.backlogUrl, newBacklog)
      .pipe(
        tap(data => console.log("backlog: " + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  deleteBacklog(userId: String, createdTimestamp: String): Observable<void> {
    return this.http.delete<void>(`${this.backlogUrl}/${userId}/${createdTimestamp}`)
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return throwError(err.message);
  }

}

