import { Routes } from '@angular/router';
import { Homepage } from './views/homepage/homepage';
import { Notfound } from './views/notfound/notfound';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
        pathMatch: 'full',
        title: 'Emmanuel-GB Portfolio'
    },
    {
        path: '**',
        loadComponent: () => import('./views/notfound/notfound').then(m => m.Notfound),
    },
];
