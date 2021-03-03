import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryViewComponent } from './country-view/country-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
