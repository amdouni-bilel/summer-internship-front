import { Routes } from '@angular/router';

export const custom_style: Routes = [
    {
        path: 'custom-pages/styles',
        loadChildren: () => import('../../components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
    }
]