import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/model/user';
import { ApiService } from '../../../shared/services/api.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../../shared/model/employee';
import { ToastrService } from 'ngx-toastr';

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

  // employee: Employee = {
  //   user_id:0,
  //   name:'',
  //   position:'',
  //   department:''
  // }

  employee: Employee | null = null;

  userList: User[] = [];

  employees: any;
  admins: any;

  totalAdmins: number = 0;
  totalEmployees: number = 0;

  isModalOpen: boolean = false;
  isProfileModalOpen: boolean = false;
  mode: 'add' | 'update' = 'add';

  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {}

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

  // Search Filter
  filteredUsers(): User[] {
    if (!this.searchTerm) {
      return this.userList;
    }

    const lowerSearch = this.searchTerm.toLowerCase();

    return this.userList.filter(
      (user) =>
        user.username?.toLowerCase().includes(lowerSearch) ||
        user.email.toLowerCase().includes(lowerSearch)
    );
  }

  // Pagination

  // Count Total Pages
  getTotalPages(): number {
    return Math.ceil(this.userList.length / this.itemsPerPage);
  }

  // Navigate Between Pages
  goToPage(page: number): void {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
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

  openUpdateModal(user: User) {
    this.mode = 'update';
    this.user = { ...user, password: '' };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isProfileModalOpen = false;
  }

  addUsers(data: User) {
    this.apiService.addUsers(data).subscribe(() => {
      // alert('User Added Successfully...');
      this.toastr.success('User Added Successfully...');
      this.loadUsers();
      this.closeModal();
    });
  }

  // Update an user
  updateUser() {
    this.apiService
      .updateUserById(this.user.id!, this.user)
      .subscribe((res: any) => {
        // alert('User updated successfully...');
        this.toastr.success('User updated successfully...');
        this.loadUsers();
        this.closeModal();
      });
  }

  // Delete an user
  deleteUserById(id: number) {
    if (confirm('Are you sure want to remove this user?')) {
      this.apiService.deleteUserById(id).subscribe(() => {
        // alert('User removed successfully...');
        this.toastr.success('User removed Successfully...');
        this.loadUsers();
      });
    }
  }

  // Get User Profile
  openUserProfile(id: number) {
    this.apiService.getUserById(id).subscribe((res: any) => {
      this.user = res.result[0];
      this.isProfileModalOpen = true;
    });
  }
}
