import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countries$ = this.http
    .get('https://restcountries.eu/rest/v2/all')
    .pipe(shareReplay(1));
  constructor(private http: HttpClient) {}
}
