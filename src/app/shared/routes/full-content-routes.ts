import { Routes } from '@angular/router';

export const full: Routes = [
  { 
    path: 'error-page',
    loadChildren: () => import('../../pages/errors/errors.module').then(m => m.ErrorsModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('../../pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: 'maintenance',
    loadChildren: () => import('../../pages/maintenance/maintenance.module').then(m => m.MaintenanceModule),
  },
  {
    path: 'custom-pages',
    loadChildren: () => import('../../components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
  }
]