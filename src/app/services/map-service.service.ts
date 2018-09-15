import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'http://api.open-notify.org/iss-now.json';

  getPositions() {
    return this.http.get(this.url)
      .pipe(map((res: any) => res.iss_position))
  }

}
