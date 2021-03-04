import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { FlagsService } from '../services/flags.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent {
  constructor(
    public countriesService: CountriesService,
    public flagsService: FlagsService,
    public router: Router
  ) {}
}
