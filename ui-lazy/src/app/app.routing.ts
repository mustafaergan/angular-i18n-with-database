import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'person', loadChildren: './person/person.module#PersonModule'}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
