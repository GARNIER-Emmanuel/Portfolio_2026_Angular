import { Routes } from '@angular/router';
import { Homepage } from './views/homepage/homepage';
import { Notfound } from './views/notfound/notfound';
import { isDevMode } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
        pathMatch: 'full',
        title: 'Emmanuel-GB Portfolio'
    },
    {
        path: 'cv-refonte',
        canMatch: [() => isDevMode()],
        loadComponent: () => import('./views/cv-refonte/cv-refonte').then(m => m.CvRefonte),
        title: 'CV - Emmanuel Garnier Boidun'
    },
    {
        path: 'banner',
        canMatch: [() => isDevMode()],
        loadComponent: () => import('./views/banner/banner').then(m => m.Banner),
        title: 'Bannière LinkedIn - Emmanuel Garnier Boidun'
    },
    {
        path: '**',
        loadComponent: () => import('./views/notfound/notfound').then(m => m.Notfound),
    },
];
