import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LangComponent} from "./lang/lang.component";

const routes: Routes = [
  {
    path: 'lang',
    component: LangComponent,
  }
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);

