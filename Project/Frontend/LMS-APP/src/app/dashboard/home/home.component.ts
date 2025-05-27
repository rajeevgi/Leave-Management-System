import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../shared/services/token.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  role : string | null = null;

  constructor(private token : TokenService) {}
  
  ngOnInit(): void {
    this.role = this.token.getRole();
    console.log("Logged-In User role:", this.role);
  }

}
