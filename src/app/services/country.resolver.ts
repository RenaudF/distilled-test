import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Country } from '../models/country';
import { CountriesService } from './countries.service';

interface CountryRouteSnapshot extends ActivatedRouteSnapshot {
  params: { country: string };
}

@Injectable({
  providedIn: 'root',
})
export class CountryResolver implements Resolve<Country> {
  resolve(route: CountryRouteSnapshot) {
    const alpha3Code = route.params.country;
    return this.countriesService.getCountry$(alpha3Code);
  }
  constructor(private countriesService: CountriesService) {}
}
