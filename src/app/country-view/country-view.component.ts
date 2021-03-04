import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { FlagsService } from '../services/flags.service';
import { Currency } from '../models/currency';
import { Language } from '../models/language';
import { map, shareReplay } from 'rxjs/operators';
import { CountryRoute } from '../services/country.resolver';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss'],
})
export class CountryViewComponent {
  country$ = this.route.data.pipe(
    map(({ country }) => country),
    shareReplay(1)
  );
  constructor(
    public countriesService: CountriesService,
    public flagsService: FlagsService,
    public router: Router,
    @Inject(ActivatedRoute) public route: CountryRoute
  ) {}
  formatCurrency(currency: Currency): string {
    return currency.code;
  }
  formatLanguage(language: Language): string {
    return language.name;
  }
}
