import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../shared/services/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  role : string | null = null;

  constructor(private router : Router, private tokenService : TokenService){}

  ngOnInit(): void {
    this.role = this.tokenService.getRole();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/app-login');
  }
}
