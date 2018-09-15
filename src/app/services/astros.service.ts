import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AstrosService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'http://api.open-notify.org/astros.json';

  getAstros() {
    return this.http.get(this.url)
      .pipe(map(res => res));
  }

}
