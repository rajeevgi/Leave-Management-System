import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../shared/model/user';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user : User = {
    username:'',
    email:'',
    password:'',
    role:'Employee'
  }

  constructor(private authService : AuthService, private router : Router){}

  onRegister(){
    this.authService.register(this.user).subscribe(( res : any) => {
      this.user = res;
      console.log("Res:", res);
      alert('User Registered Successfully...');
      this.router.navigateByUrl('/app-login');
    })
  }

}
