import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Leave } from '../../../shared/model/leave';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  leavesList: any[] = [];

  leave: Leave = {
    employee_id: 0,
    start_date: '',
    end_date: '',
    leave_type: '',
    reason: '',
    status: 'Pending',
    created_at: '',
    updated_at: '',
  };

  constructor(private apiServive: ApiService, private tostr : ToastrService) {}

  ngOnInit(): void {
    this.getAllLeaves();
  }

  // Get All Leaves Of An employees
  getAllLeaves() {
    this.apiServive.getAllLeaves().subscribe((res: any) => {
      this.leavesList = res;
    });
  }

  // Update Status of Leave
  updateStatus(leave: any) {
  this.apiServive.updateLeaveStatus(leave.id, { status: leave.status }).subscribe({
    next: (res) => {
      this.tostr.success('Leave Updated Successfully...');
      this.getAllLeaves(); // Refresh table to show updated_at change
    },
    error: (err) => {
      this.tostr.error('Failed to update leave status');
      console.error(err);
    }
  });
}

}
