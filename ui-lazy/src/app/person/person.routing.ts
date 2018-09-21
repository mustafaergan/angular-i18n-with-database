import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  }
];


export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);

