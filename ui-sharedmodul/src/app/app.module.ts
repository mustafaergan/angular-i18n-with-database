import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ModuleRouting} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
