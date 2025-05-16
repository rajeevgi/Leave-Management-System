import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router : Router){}

  logout(){
    sessionStorage.getItem('token');
    sessionStorage.removeItem('token');
    sessionStorage.clear();
    this.router.navigateByUrl('/app-login');
  }
}
