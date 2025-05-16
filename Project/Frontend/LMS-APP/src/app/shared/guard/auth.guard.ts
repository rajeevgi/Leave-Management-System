import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  const token = sessionStorage.getItem('token');

  if(token != null){
    return true;
  }else{
    router.navigateByUrl('/app-login');
    return false;
  }
  
};
