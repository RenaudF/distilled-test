import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { CountriesService } from './countries.service';

const sanitize = (sanitizer: DomSanitizer) => (svg: string) => {
  let blob = new Blob([svg], { type: 'image/svg+xml' });
  let url = URL.createObjectURL(blob);
  return sanitizer.bypassSecurityTrustResourceUrl(url);
};

@Injectable({ providedIn: 'root' })
export class FlagsService {
  private cache: Record<string, Observable<SafeResourceUrl>> = {};

  getFlag$(alpha3Code: string): Observable<SafeResourceUrl> {
    if (!this.cache[alpha3Code])
      this.cache[alpha3Code] = this.countriesService
        .getCountry$(alpha3Code)
        .pipe(
          switchMap((country) =>
            this.http.get(country.flag, { responseType: 'text' })
          ),
          map(sanitize(this.sanitizer)),
          shareReplay(1)
        );
    return this.cache[alpha3Code];
  }

  constructor(
    private countriesService: CountriesService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
}
