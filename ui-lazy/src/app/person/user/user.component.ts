import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private translate: TranslateService) {
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|tr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
