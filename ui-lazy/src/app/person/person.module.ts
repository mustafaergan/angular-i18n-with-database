import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {TranslationService} from "../admin/TranslationService";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ModuleRouting} from './person.routing';



@NgModule({
  imports: [
    CommonModule,
    ModuleRouting,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService, // servis istedigini degistireceksek eger
        // useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [UserComponent]
  // ,
  // exports: [
  //   TranslateModule
  // ]
})
export class PersonModule { }
