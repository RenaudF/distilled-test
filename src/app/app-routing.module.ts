import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { CountryResolver } from './services/country.resolver';

const routes: Routes = [
  {
    path: ':country',
    component: CountryViewComponent,
    resolve: { country: CountryResolver },
  },
  { path: '', component: CountriesListComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
