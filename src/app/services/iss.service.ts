import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'http://api.open-notify.org/iss-now.json';

  getPositions() {
    return this.http.get(this.url)
      .pipe(map((res: any) => {
        const data = {
          lat: parseInt(res.iss_position.latitude, 10),
          lng: parseInt(res.iss_position.longitude, 10)
        };
        return data;
      }));
  }

}
