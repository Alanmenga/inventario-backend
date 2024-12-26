import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { materialImports } from './material.config';
import { childRoutes } from '../dashboard/router-child.routes';

export const sharedConfig = [
  importProvidersFrom(CommonModule),
  ...materialImports,
  provideRouter(childRoutes)
];