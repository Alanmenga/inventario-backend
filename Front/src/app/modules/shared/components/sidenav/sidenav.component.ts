import { Component } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { childRoutes } from '../../../dashboard/router-child.routes';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  providers: [
    // provideRouter(childRoutes)
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
