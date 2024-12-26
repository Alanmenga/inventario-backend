import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CategoryComponent } from '../category/components/category/category.component';

export const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
];