import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService)
  
  const token = authService.getSessionToken() as string

  if(token){
    const cloned = req.clone({
      setHeaders: {
        authorization:`Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
