import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EmployeesComponent } from './dashboard/admin/employees/employees.component';
import { LeaveRequestsComponent } from './dashboard/admin/leave-requests/leave-requests.component';
import { ApplyLeaveComponent } from './dashboard/employee/apply-leave/apply-leave.component';
import { MyLeavesComponent } from './dashboard/employee/my-leaves/my-leaves.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './dashboard/employee/employee-dashboard/employee-dashboard.component';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [

    // Default route
    {
        path:'',
        redirectTo:'app-login',
        pathMatch:'full'
    },

    {
        path:'app-login',
        component:LoginComponent
    },

    {
        path:'app-register',
        component:RegisterComponent
    },

    {
        path:'app-navbar',
        component:NavbarComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-footer',
        component:FooterComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-home',
        component:HomeComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-admin-dashboard',
        component:AdminDashboardComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-employee-dashboard',
        component:EmployeeDashboardComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-employees',
        component:EmployeesComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-leave-requests',
        component:LeaveRequestsComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-apply-leave',
        component:ApplyLeaveComponent,
        canActivate:[authGuard]
    },

    {
        path:'app-my-leaves',
        component:MyLeavesComponent,
        canActivate:[authGuard]
    },

    {
        path:'**',
        redirectTo:'app-login',
        pathMatch:'full'
    }
    
];
