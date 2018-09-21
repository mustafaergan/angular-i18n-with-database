import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {Test2Component} from "./test2/test2.component";

const routes: Routes = [
  { path: 'test2', component: Test2Component },
  { path: 'test', component: TestComponent }
];

export const routing = RouterModule.forRoot(routes);
