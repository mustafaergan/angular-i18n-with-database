import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateService} from '@ngx-translate/core';
import {Observable} from "rxjs/internal/Observable";



@Injectable()
export class TranslationService implements TranslateLoader {

  constructor(private http: HttpClient,private translate: TranslateService) {
  }

  getTranslation(lang: string): Observable<any> {
    return this.http.get('http://localhost:8080/message/lazy/'+lang+"/admin");
  }
}
