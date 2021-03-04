import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { CountriesService } from './countries.service';

export interface CountryRoute extends ActivatedRoute {
  data: Observable<{ country: Country }>;
  params: Observable<{ country: string }>;
  snapshot: ActivatedRouteSnapshot & { params: CountryRoute['params'] };
}

@Injectable({ providedIn: 'root' })
export class CountryResolver implements Resolve<Country> {
  resolve(route: CountryRoute['snapshot']) {
    const alpha3Code = route.params.country;
    return this.countriesService.getCountry$(alpha3Code);
  }
  constructor(private countriesService: CountriesService) {}
}
