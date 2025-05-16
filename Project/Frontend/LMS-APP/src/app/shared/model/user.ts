export interface User {
    id ?: number;
    username ?: string;
    email : string;
    password : string;
    role ?: 'Employee' | 'Admin';   // Default is Employee
    created_at ?: string;
    updated_at ?: string;
}
