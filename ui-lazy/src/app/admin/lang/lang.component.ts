import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  constructor(private translate: TranslateService) {
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|tr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
