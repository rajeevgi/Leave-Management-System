import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getRole() : string | null  {
    const token = sessionStorage.getItem('token');
    if(!token) return null;

    try {
      const decoded : any = jwtDecode(token);
      return decoded.role || null;
    } catch (error) {
      return null;
    }
  }

}
