import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CountriesService } from './countries.service';

const sanitize = (sanitizer: DomSanitizer) => (svg: string) => {
  let blob = new Blob([svg], { type: 'image/svg+xml' });
  let url = URL.createObjectURL(blob);
  return sanitizer.bypassSecurityTrustResourceUrl(url);
};

@Injectable({
  providedIn: 'root',
})
export class FlagsService {
  public flag$Map$ = this.countriesService.countries$.pipe(
    map((countries) =>
      countries.reduce((acc, country) => {
        acc[country.alpha3Code] = this.http
          .get(country.flag, { responseType: 'text' })
          .pipe(map(sanitize(this.sanitizer)), shareReplay(1));
        return acc;
      }, {} as Record<string, Observable<SafeResourceUrl>>)
    )
  );

  constructor(
    private countriesService: CountriesService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
}
