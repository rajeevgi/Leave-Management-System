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
  isUpdate: 'Update' | 'Add' = 'Add';
  profileExists : boolean = false;

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
        this.isUpdate = 'Update';
        this.profileExists = true;
        sessionStorage.setItem('profileExists', 'true');
      } else {
        this.employee = {
          user_id: userId,
          name: '',
          position: '',
          department: '',
          created_at: '',
          updated_at: '',
        };
        this.isUpdate = 'Add';
        this.profileExists = false;
        sessionStorage.setItem('profileExists', 'false');  // Set False if no profile Created.
      }
      this.showForm = false;
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  saveProfile() {
    if (
      this.employee.name &&
      this.employee.position &&
      this.employee.department
    ) {
      if (this.isUpdate === 'Update') {
        // Update Existing Profile
        this.apiService
          .updateUserProfile(this.employee.user_id, this.employee)
          .subscribe(
            (res: any) => {
              if (res && res.result && res.result.affectedRows > 0) {
                this.profileExists = true;
                this.toastr.success(
                  res.message || 'Profile Updated Successfully...'
                );
                this.showForm = false;
                sessionStorage.setItem('profileExists', 'true');
                this.getEmployeeProfile(this.employee.user_id); // Show updated profile
                // window.location.reload();
              } else {
                this.toastr.error('Failed to update profile');
              }
            },
            (err) => {
              this.toastr.error('Error updating profile');
            }
          );
      } else {
        // Add New Profile
        this.apiService.addUserProfile(this.employee).subscribe(
          (res: any) => {
            if (res && res.result && res.result.affectedRows > 0) {
              this.profileExists = true;
              this.toastr.success(
                res.message || 'Profile Added Successfully...'
              );
              this.showForm = false;
              sessionStorage.setItem('profileExists', 'true');
              this.getEmployeeProfile(this.employee.user_id); // Show added profile
              // window.location.reload();
            } else {
              this.toastr.error('Failed to add profile');
            }
          },
          (err) => {
            this.toastr.error('Error adding profile');
          }
        );
      }
    }
  }
}
