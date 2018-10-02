import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
