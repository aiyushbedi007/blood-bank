import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorsService {

  // URL which returns list of JSON donors (API end-point URL)
  private readonly URL = 'http://localhost:3000/donors';

  constructor(private http: HttpClient) { }

  // create a method named: resolvedonors()
  // this method returns list-of-donors in form of Observable
  // every HTTTP call returns Observable object
  resolveDonors(): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(this.URL);
  }
}
