import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, data);
  }

  getSessionToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      // Only try to access sessionStorage in the browser
      const token = sessionStorage.getItem('token');
      return token;
    } else {
      // Handle SSR or non-browser environment
      return null;
    }
  }
}
