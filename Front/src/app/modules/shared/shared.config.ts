import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { materialProviders } from './material.config';
import { childRoutes } from '../dashboard/router-child.routes';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const sharedConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CommonModule, SidenavComponent),
    ...materialProviders,
    provideRouter(childRoutes)
  ]
};