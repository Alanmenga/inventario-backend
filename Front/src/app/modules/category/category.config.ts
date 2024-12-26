import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { dashboardRoutes } from '../dashboard/dashboard.routes';

export const categoryConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CommonModule),
    // provideRouter(dashboardRoutes)
  ]
};