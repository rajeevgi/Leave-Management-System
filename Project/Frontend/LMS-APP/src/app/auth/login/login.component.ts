import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/model/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  user: User = {
    email:'',
    password:''
  }

  constructor(private authService: AuthService, private router: Router) {}
 
  onLogin() {
    this.authService.login(this.user).subscribe((res : any) => {
      const userRole = res.role;

      if((userRole ==='Admin' || userRole === 'Employee') && res.token){

        sessionStorage.setItem('token', JSON.stringify(res.token));
        sessionStorage.setItem(`${userRole}`, JSON.stringify(res));
        alert(`${userRole} is loginned Successfully...`);
        this.router.navigateByUrl('/app-home');
      }else{
        alert('Login failed. Please check your credentials.');
      }
    });
  } 

}
