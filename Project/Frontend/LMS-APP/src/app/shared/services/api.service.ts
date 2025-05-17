import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  userUrl = "http://localhost:5000/api/users";

  empUrl = "http://localhost:5000/api/employees";

  constructor(private http : HttpClient) { }

  // Users API's
  getAllUsers() : Observable<any> {
    return this.http.get(`${this.userUrl}/getAllUsers`);
  }


  // Employee's API's
  getAll() : Observable<any> {
    return this.http.get(`${this.empUrl}/getAllUsers`);
  }
}
 