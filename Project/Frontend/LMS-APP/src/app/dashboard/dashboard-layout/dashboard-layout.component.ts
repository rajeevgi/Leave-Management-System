import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
