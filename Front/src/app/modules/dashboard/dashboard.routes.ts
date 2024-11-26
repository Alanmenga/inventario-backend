import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';

export const dashboardRoutes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./router-child.routes').then(m => m.childRoutes)
            }
        ]
        // loadChildren: () => import('./router-child.routes').then(m => m.childRoutes)
    },
];