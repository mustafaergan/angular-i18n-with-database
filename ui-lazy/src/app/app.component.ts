import { Component } from '@angular/core';
import {TranslateService} from '../../node_modules/@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-lazy';

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fr", "tr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|tr/) ? browserLang : 'en');
  }

}
