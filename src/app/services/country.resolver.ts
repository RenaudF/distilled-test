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
  data: Observable<{ country: Country | undefined }>;
  params: Observable<{ country: string }>;
  snapshot: ActivatedRouteSnapshot & {
    data: { country: Country | undefined };
    params: { country: string };
  };
}

@Injectable({ providedIn: 'root' })
export class CountryResolver implements Resolve<Country | undefined> {
  resolve(route: CountryRoute['snapshot']) {
    const alpha3Code = route.params.country;
    return this.countriesService.getCountry$(alpha3Code);
  }
  constructor(private countriesService: CountriesService) {}
}
