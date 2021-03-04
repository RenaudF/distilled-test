import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Country } from '../models/country';
import { Observable } from 'rxjs';

const isDefined = <T>(test: T | undefined): test is T => {
  return test !== undefined;
};

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countries$ = this.http
    .get<Country[]>('https://restcountries.eu/rest/v2/all')
    .pipe(shareReplay(1));

  getCountry$(alpha3Code: string): Observable<Country> {
    return this.countries$.pipe(
      map((countries) =>
        countries.find((country) => country.alpha3Code === alpha3Code)
      ),
      filter(isDefined),
      shareReplay(1)
    );
  }

  constructor(private http: HttpClient) {}
}
