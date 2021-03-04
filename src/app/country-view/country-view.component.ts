import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { FlagsService } from '../services/flags.service';
import { Currency } from '../models/currency';
import { Language } from '../models/language';
import {
  distinctUntilChanged,
  filter,
  shareReplay,
  switchMap,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isDefined } from '@angular/compiler/src/util';

interface CountryRoute extends ActivatedRoute {
  params: Observable<{ country: string }>;
}

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss'],
})
export class CountryViewComponent {
  country$ = this.route.params.pipe(
    filter(isDefined),
    distinctUntilChanged(),
    switchMap(({ country }) => this.countriesService.getCountry$(country)),
    shareReplay(1)
  );
  constructor(
    public countriesService: CountriesService,
    public flagsService: FlagsService,
    public router: Router,
    public route: CountryRoute
  ) {}
  formatCurrency(currency: Currency): string {
    return currency.code;
  }
  formatLanguage(language: Language): string {
    return language.name;
  }
}
