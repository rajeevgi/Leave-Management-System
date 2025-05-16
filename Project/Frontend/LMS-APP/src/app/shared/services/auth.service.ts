import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = "http://localhost:5000/api/auth"; 

  constructor(private http : HttpClient) { }

  login(data : any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, data); 
  }

  register(data : any) : Observable<any>{
    console.log("Res:", data);
    return this.http.post<any>(`${this.authUrl}/register`, data);
  }

}
