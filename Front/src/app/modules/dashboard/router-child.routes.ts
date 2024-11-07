import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';

export const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
];