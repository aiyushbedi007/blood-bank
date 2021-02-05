import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donor } from './donor';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch donors list
  getDonors(): Observable<Donor> {
    return this.http.get<Donor>(this.apiURL + '/donors')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch donor
  getDonor(id: string): Observable<Donor> {
    return this.http.get<Donor>(`${this.apiURL}/donors/edit/${id}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method => Create donor
  createDonor(donor): Observable<Donor> {
    return this.http.post<Donor>(this.apiURL + '/donors', JSON.stringify(donor), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method => Update donor
  updateDonor(id: string, donor: any): Observable<Donor> {
    return this.http.patch<Donor>(this.apiURL + '/donors/' + id, JSON.stringify(donor), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API delete() method => Delete donor
  deleteDonor(id: string): any{
    return this.http.delete<Donor>(this.apiURL + '/donors/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  // tslint:disable-next-line: typedef
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
