import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LangComponent} from './lang/lang.component';
import {ModuleRouting} from './admin.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslationService} from "./TranslationService";
import {HttpClient} from "@angular/common/http";

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
  declarations: [LangComponent]
})
export class AdminModule { }
