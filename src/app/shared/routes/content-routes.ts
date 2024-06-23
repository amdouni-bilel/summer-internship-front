import { Routes } from '@angular/router';

export const content: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'widgets',
        loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule)
    },
    {
        path: 'maps',
        loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
    },
    {
        path: 'apps/chat',
        loadChildren: () => import('../../components/apps/chat/chat.module').then(m => m.ChatModule)
    },
    {
        path: 'apps/contact',
        loadChildren: () => import('../../components/apps/contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'apps',
        loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path: 'apps/file-manager',
        loadChildren: () => import('../../components/apps/file-manager/filemanager.module').then(m => m.FilemanagerModule)
    },
    {
        path: 'apps/todo-list',
        loadChildren: () => import('../../components/apps/todo-list/todo.module').then(m => m.TodoModule)
    },
    {
        path: 'apps/user-list',
        loadChildren: () => import('../../components/apps/userlist/userlist.module').then(m => m.UserlistModule)
    },
    {
        path: 'elements',
        loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
    },
    {
        path: 'elements/carousel',
        loadChildren: () => import('../../components/elements/carousel/carousel.module').then(m => m.CarouselModule)
    },
    {
        path: 'forms',
        loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormElementsModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
    },
    {
        path: 'tables',
        loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule)
    },
    {
        path: 'icons',
        loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'pages/blog',
        loadChildren: () => import('../../components/pages/blog/blog.module').then(m => m.BlogModule)
    },
    {
        path: 'pages/email',
        loadChildren: () => import('../../components/pages/email/email.module').then(m => m.EmailModule)
    },
    {
        path: 'pages/fichier',
        loadChildren: () => import('../../components/pages/fichier/fichier.module').then(m => m.FichierModule)
    },
    {
        path: 'pages/invoice',
        loadChildren: () => import('../../components/pages/invoice/invoice.module').then(m => m.InvoiceModule)
    },
    {
        path: 'pages/pricing',
        loadChildren: () => import('../../components/pages/pricing/pricing.module').then(m => m.PricingModule)
    },
    {
        path: 'pages/profile',
        loadChildren: () => import('../../components/pages/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'e-commerce',
        loadChildren: () => import('../../components/e-commerce/e-commerce.module').then(m => m.ECommerceModule)
    },
    {
        path: 'utilities',
        loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
    },


    {
        path: 'missions',
        loadChildren: () => import('../../missions/mission.module').then(m => m.MissionModule)
      },

  {
        path: 'users',
        loadChildren: () => import('../../users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'cra',
        loadChildren: () => import('../../cra/cra.module').then(c => c.CraModule)
      },
      {
        path: 'administration',
        loadChildren: () => import('../../administration/administration.module').then(m => m.AdministrationModule)
      } ,
      {
        path: 'facturation',
        loadChildren: () => import('../../facturation/facturation.module').then(m => m.FacturationModule)
      } ,
      {
        path: 'gestion-cv',
        loadChildren: () => import('../../gestion-cv/gestion-cv.module').then(m => m.GestionCvModule)
      }
]
