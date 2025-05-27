import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Employee } from '../../../shared/model/employee';
import { TokenService } from '../../../shared/services/token.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css',
})
export class EmployeeDashboardComponent implements OnInit {
  employee: Employee = {
    user_id: 0,
    name: '',
    position: '',
    department: '',
    created_at: '',
    updated_at: '',
  };

  showForm: boolean = false;

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const userId = this.tokenService.getUserId();
    this.employee.user_id = userId;
    if (userId) {
      this.getEmployeeProfile(userId);
    }
  }

  getEmployeeProfile(userId: number) {
    this.apiService.getEmployeeProfile(userId).subscribe((res: any) => {
      if (res && res.name) {
        this.employee = res;
        this.showForm = false;
      } else {
        this.employee = {
          user_id: userId,
          name: '',
          position: '',
          department: '',
          created_at: '',
          updated_at: '',
        };
      }
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  saveProfile() {
    this.apiService.addUserProfile(this.employee).subscribe((res: any) => {
      if (res.success || res.name) {
        this.showForm = false;
        this.toastr.success('Profile Added Successfully...');
        this.getEmployeeProfile(this.employee.user_id); // Reload updated data
      }
    });
  }
}
