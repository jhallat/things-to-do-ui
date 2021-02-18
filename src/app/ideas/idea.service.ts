import { Injectable } from "@angular/core";
import { IIdea } from "./idea";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IdeaService {
    private ideasUrl = "http://localhost:8080/ideas";
    private ideaUrl = "http://localhost:8080/idea";

    constructor(private http: HttpClient) { }

    getIdeas(): Observable<IIdea[]> {
        return this.http.get<IIdea[]>(this.ideasUrl).pipe(
            tap(data => console.log("ideas: " + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    addIdea(newIdea: IIdea): Observable<IIdea> {
        return this.http.post<IIdea>(this.ideaUrl, newIdea)
            .pipe(
                tap(data => console.log("idea: " + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    deleteIdea(userId: String, createdTimestamp: String): Observable<void> {
        return this.http.delete<void>(`${this.ideaUrl}/${userId}/${createdTimestamp}`)
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return throwError(err.message);
    }

}