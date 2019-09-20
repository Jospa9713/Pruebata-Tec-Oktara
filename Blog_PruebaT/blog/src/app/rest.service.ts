import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {

   }

   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getBlog(): Observable<any> {
    return this.http.get(endpoint + 'posts' ).pipe(
      map(this.extractData));
  }

  getById(id): Observable<any> {
    return this.http.get(endpoint +'posts/id/' + id).pipe(
      map(this.extractData));
  }
  getLastest(): Observable<any> {
    return this.http.get(endpoint + 'posts/latest').pipe(
      map(this.extractData));
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
  
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }





}
