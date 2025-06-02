import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { TokenService } from '../../../shared/services/token.service';

@Component({
  selector: 'app-my-leaves',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-leaves.component.html',
  styleUrl: './my-leaves.component.css'
})
export class MyLeavesComponent implements OnInit {

leaves : any[] = [];
loading : boolean = true;

constructor(private apiService : ApiService, private tokenService : TokenService){}
  
ngOnInit(): void {
  const userId = this.tokenService.getUserId();
  console.log("userId: ", userId);
  if(userId){
    this.apiService.myLeaves(userId).subscribe({
      next: (data : any[]) => {
        this.leaves = data;
        console.log("Leaves Data : ", this.leaves);
        this.loading = false;
      },

      error: (err) => {
        console.error('Error fetching leaves', err);
        this.loading = false;
      }
    })   
  }
}

formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

}
