import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../shared/services/token.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  role: string | null = null;

  dropdownOpen: boolean = false;
  profileExists: boolean = false;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private elementRef: ElementRef,
    private apiService: ApiService
  ) {}

  // ngOnInit(): void {
  //   this.role = this.tokenService.getRole();
  //   if (this.role === 'Employee') {
  //     this.profileExists = sessionStorage.getItem('profileExists') === 'true';
  //   }
  // }

  ngOnInit(): void {
    this.role = this.tokenService.getRole();

    if (this.role === 'Employee') {
      const userId = this.tokenService.getUserId();
      this.apiService.getEmployeeProfile(userId).subscribe((res: any) => {
        if (res && res.name) {
          this.profileExists = true;
          sessionStorage.setItem('profileExists', 'true');
        } else {
          this.profileExists = false;
          sessionStorage.setItem('profileExists', 'false');
        }
      });
    }
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
  onClickOutside(target: HTMLElement) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.dropdownOpen = false;
    }
  }
}
