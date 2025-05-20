import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/model/user';
import { ApiService } from '../../../shared/services/api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  user: User = {
    username: '',
    email: '',
    password: '',
    role: 'Employee',
  };

  userList: User[] = [];

  employees: any;
  admins: any;

  totalAdmins: number = 0;
  totalEmployees: number = 0;

  isModalOpen: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getAllUsers().subscribe((res: any) => {
      this.userList = res.results;

      // Counting Number Of Employees
      this.employees = this.userList.filter(
        (user: any) => user.role === 'Employee'
      );
      this.totalEmployees = this.employees.length;

      // Counting Number Of Admins
      this.admins = this.userList.filter((user: any) => user.role === 'Admin');
      this.totalAdmins = this.admins.length;
    });
  }

  // Add Users
  openModal() {
    this.user = {
      username: '',
      email: '',
      password: '',
      role: 'Employee',
    };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addUsers(data: User) {
    this.apiService.addUsers(data).subscribe((res: any) => {
      alert('User Added Successfully...');
      this.loadUsers();
      this.closeModal();
    });
  }

  // Delete an user
  deleteUserById(id: number) {
    if (confirm('Are you sure want to remove this user?')) {
      this.apiService.deleteUserById(id).subscribe(() => {
        alert('User removed successfully...');
        this.loadUsers();
      });
    }
  }
}
