import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Country } from '../models/country';
import { Observable } from 'rxjs';

const compare = (alpha3Code: string) => (country: Country) =>
  country.alpha3Code === alpha3Code;

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private cache: Record<string, Observable<Country | undefined>> = {};

  public countries$ = this.http
    .get<Country[]>('https://restcountries.eu/rest/v2/all')
    .pipe(shareReplay(1));

  getCountry$(alpha3Code: string) {
    if (!this.cache[alpha3Code])
      this.cache[alpha3Code] = this.countries$.pipe(
        map((countries) => countries.find(compare(alpha3Code))),
        shareReplay(1)
      );
    return this.cache[alpha3Code];
  }

  constructor(private http: HttpClient) {}
}
