export interface Leave {
    id ?: number;
    employee_id : number;
    start_date: string;
    end_date : string;
    leave_type : string;
    reason : string;
    status? : 'Approved' | 'Pending' | 'Not Approved';   // Default is Pending
    created_at ?: string;
    updated_at ?: string;
}
