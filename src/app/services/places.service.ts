import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getPlaces(location: string, category: string) {
    if (category === '') {
      return this.http.get('/server/api?location' + location);
    }
    return this.http.get('/server/api?location=' + location + '&category=' + category);
  }

  getPlacesDefault() {
    return this.http.get('/server/api?location=Sofia, Bulgaria&category=sights-museums');
  }
}
