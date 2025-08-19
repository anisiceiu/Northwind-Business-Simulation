import { Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'test', component: TestComponentComponent },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes),
        canActivate:[AuthGuard]
    },
    {
        path: 'products',
        loadChildren: () => import('./features/products/products.routes').then(m => m.productsRoutes),
        canActivate:[AuthGuard]
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth/login' },
];
