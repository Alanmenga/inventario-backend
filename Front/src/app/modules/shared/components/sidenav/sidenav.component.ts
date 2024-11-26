import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIcon, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

}
