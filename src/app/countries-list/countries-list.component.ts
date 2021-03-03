import { Component } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent {
  countries$ = this.countriesService.countries$;
  constructor(private countriesService: CountriesService) {}
}
