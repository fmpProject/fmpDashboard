import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
      { path: 'test', loadChildren: 'app/pages/test/test.module#TestModule' },
        // { path: 'test', loadChildren: 'app/pages/test/test.module' },       //NOTA: Si se usa DEFAULT, en el ROUTING no se puede indicar la clase, sino que se debe dejar vacia y viceversa ... { path: 'test', loadChildren: 'app/pages/test/test.module#TestModule' },

      { path: 'administration', loadChildren: 'app/pages/administration/administration.module#AdministrationModule' }
        // { path: 'administration', loadChildren: () => System.import('./administration/administration.module') }
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
