import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/model/user';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  userList: User[] = [];

  constructor(private apiService : ApiService){}
  
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.apiService.getAllUsers().subscribe(( res : any ) => {
      this.userList = res.results;
    })
  }


}
