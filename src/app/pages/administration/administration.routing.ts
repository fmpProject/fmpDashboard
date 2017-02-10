import { Routes, RouterModule }  from '@angular/router';

import { AdministrationComponent } from './administration.component';
  import { ConfigurationComponent } from './components/configuration/configuration.component';
  import { PlanComponent } from './components/plan/plan.component';


import { ModuleWithProviders } from '@angular/core';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'plan', component: PlanComponent }
    ]
  }
];

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
  //export const routing = RouterModule.forChild(routes);  //NOTA: no tenia definido el tipo, de resto identico
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------