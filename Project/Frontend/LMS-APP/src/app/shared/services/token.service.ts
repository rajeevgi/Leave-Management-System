import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getRole(): string | null {
    const token = sessionStorage.getItem('token');
    if (!token) return null;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.role || null;
    } catch (error) {
      return null;
    }
  }

  getUserId(): number {
    const token = sessionStorage.getItem('token');
    if (!token) return 0;

    try {
      const decoded: any = jwtDecode(token);
      const userId = decoded.id || decoded.userId 

      return typeof userId === 'number' ? userId : 0;
    } catch (error) {
      return 0;
    }
  }

}
