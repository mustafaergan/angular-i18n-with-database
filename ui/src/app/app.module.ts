import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { routing } from './app.routing';

import {AppComponent} from './app.component';
import {TranslationService} from "./TranslationService";
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';


// i18n dosyası ile birlikte kullanmak icin
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "i18n/", ".json");
// }

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService, // servis istedigini degistireceksek eger
        // useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
