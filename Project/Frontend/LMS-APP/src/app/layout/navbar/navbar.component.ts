import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../shared/services/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  role: string | null = null;

  dropdownOpen: boolean = false;
  isProfileCompleted : boolean = false;

  constructor(private router: Router, private tokenService: TokenService, private elementRef : ElementRef) {}

  ngOnInit(): void {
    this.role = this.tokenService.getRole();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/app-login');
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement){
    if(!this.elementRef.nativeElement.contains(target)){
      this.dropdownOpen = false;
    }
  }
}
