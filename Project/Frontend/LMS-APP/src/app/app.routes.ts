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
        component:NavbarComponent
    },

    {
        path:'app-footer',
        component:FooterComponent
    },

    {
        path:'app-home',
        component:HomeComponent
    },

    {
        path:'app-employees',
        component:EmployeesComponent
    },

    {
        path:'app-leave-requests',
        component:LeaveRequestsComponent
    },

    {
        path:'app-apply-leave',
        component:ApplyLeaveComponent
    },

    {
        path:'app-my-leaves',
        component:MyLeavesComponent
    },

    {
        path:'**',
        redirectTo:'app-login',
        pathMatch:'full'
    }
    
];
