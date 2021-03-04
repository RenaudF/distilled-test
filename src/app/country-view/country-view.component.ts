import { Component, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { FlagsService } from '../services/flags.service';
import { Currency } from '../models/currency';
import { Language } from '../models/language';
import { filter, map, shareReplay, takeUntil } from 'rxjs/operators';
import { CountryRoute } from '../services/country.resolver';
import { Subject } from 'rxjs';
import { isUndefined } from '../utils';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss'],
})
export class CountryViewComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  country$ = this.route.data.pipe(
    map(({ country }) => country),
    shareReplay(1)
  );
  constructor(
    public countriesService: CountriesService,
    public flagsService: FlagsService,
    public router: Router,
    @Inject(ActivatedRoute) public route: CountryRoute
  ) {
    this.country$
      .pipe(filter(isUndefined), takeUntil(this.destroy$))
      .subscribe(() => this.router.navigateByUrl('/'));
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  formatCurrency(currency: Currency): string {
    return currency.code;
  }
  formatLanguage(language: Language): string {
    return language.name;
  }
}
