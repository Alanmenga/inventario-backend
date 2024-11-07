import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    { 
        path: '', 
        loadChildren: () => import('./router-child.routes').then(m => m.childRoutes)
    },
];