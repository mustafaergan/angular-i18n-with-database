import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangComponent } from './lang/lang.component';
import {SharedModule} from "../shared/shared.module";
import {ModuleRouting} from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModuleRouting
  ],
  declarations: [LangComponent]
})
export class AdminModule { }
