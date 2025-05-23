import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  userUrl = "http://localhost:5000/api/users";

  empUrl = "http://localhost:5000/api/employees";

  leaveUrl = "http://localhost:5000/api/leaves";

  constructor(private http : HttpClient) { }

  // Users API's
  addUsers(data : any) : Observable<any> {
    return this.http.post<any>(`${this.userUrl}/createUser`, data);
  }

  getAllUsers() : Observable<any> {
    return this.http.get(`${this.userUrl}/getAllUsers`);
  }

  getUserById(id : number) : Observable<any> {
    return this.http.get(`${this.userUrl}/findUserById/${id}`);
  }

  deleteUserById(id : number) : Observable<any> {
    return this.http.delete(`${this.userUrl}/deleteUserById/${id}`);
  }

  updateUserById(id: number, data : any) : Observable<any> {
    return this.http.put(`${this.userUrl}/updateUser/${id}`, data);
  }

  // Employee's API's
  getAll() : Observable<any> {
    return this.http.get(`${this.empUrl}/getAllUsers`);
  }

  getEmployeeProfile(id : number) : Observable<any> {
    return this.http.get(`${this.empUrl}/findUserById/${id}`);
  }


  // Leave API's
  getAllLeaves() : Observable<any> {
    return this.http.get(`${this.leaveUrl}/getAllLeaves`);
  }

  updateLeaveStatus(id:number, data:any) : Observable<any> {
    return this.http.put(`${this.leaveUrl}/updateLeaveStatus/${id}`, data);
  }
}
 