import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

  // Define API
const AUTH_API = 'http://localhost:3000/';

  // Http Options
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Login user
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  // HttpClient API post() method => Create a new user
  register(uname: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      uname,
      email,
      password,
      role
    }, httpOptions);
  }
}
