import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { childRoutes } from './router-child.routes';
import { dashboardRoutes } from './dashboard.routes';

export const dashboardConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CommonModule),
    provideRouter(dashboardRoutes)
  ]
};