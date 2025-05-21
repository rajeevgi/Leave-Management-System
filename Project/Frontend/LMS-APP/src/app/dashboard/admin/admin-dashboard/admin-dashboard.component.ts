import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/model/user';
import { ApiService } from '../../../shared/services/api.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, FormsModule, RouterLink],
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
  mode : 'add' | 'update' = 'add';

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

  // Add Users / Update Users
  openAddModal() {
    this.mode = 'add';
    this.user = {
      username: '',
      email: '',
      password: '',
      role: 'Employee',
    };
    this.isModalOpen = true;
  }

  openUpdateModal(user : User){
    this.mode = 'update';
    this.user = {...user, password:''};
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

  // Update an user
  updateUser() {
    this.apiService.updateUserById(this.user.id!, this.user).subscribe(( res : any) => {
      alert('User updated successfully...');
      this.loadUsers();
      this.closeModal();
    });
  }
}
