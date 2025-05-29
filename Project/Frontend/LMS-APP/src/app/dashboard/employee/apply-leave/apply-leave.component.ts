import { Component } from '@angular/core';
import { Leave } from '../../../shared/model/leave';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  imports: [FormsModule, CommonModule],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css',
})
export class ApplyLeaveComponent {
  leave: Leave = {
    employee_id: 0,
    start_date: '',
    end_date: '',
    leave_type: '',
    reason: '',
    status: 'Pending',
  };

  constructor(private apiService: ApiService, private toastr: ToastrService, private router : Router) {}

  applyLeave() {
    this.apiService.applyLeave(this.leave).subscribe((res: any) => {
      if (res && res.result && res.result.affectedRows > 0) {
        this.toastr.success('Leave Applied Successfully!');
        this.leave = {
          employee_id: 0, // keep the ID
          leave_type: '',
          start_date: '',
          end_date: '',
          reason: '',
          status: 'Pending',
        };
        this.router.navigateByUrl('/app-dashboard/app-employee-dashboard');
      } else {
        this.toastr.error('Failed to apply leave');
      }
    });
  }

}
