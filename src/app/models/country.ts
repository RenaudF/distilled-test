import { Currency } from './currency';
import { Language } from './language';
import { RegionalBloc } from './regional-bloc';

export interface Country {
  name: string; // "Colombia",
  topLevelDomain: string[]; // [".co"],
  alpha2Code: string; // "CO",
  alpha3Code: string; // "COL",
  callingCodes: string[]; // ["57"],
  capital: string; // "Bogotá",
  altSpellings: string[]; // ["CO", "Republic of Colombia", "República de Colombia"],
  region: string; // "Americas",
  subregion: string; // "South America",
  population: number; // 48759958,
  latlng: [number, number]; // [4.0, -72.0],
  demonym: string; // "Colombian",
  area: number; // 1141748.0,
  gini: number; // 55.9,
  timezones: string[]; // ["UTC-05:00"],
  borders: string[]; // ["BRA", "ECU", "PAN", "PER", "VEN"],
  nativeName: string; // "Colombia",
  numericCode: string; // "170",
  currencies: Currency[];
  languages: Language[];
  translations: Record<
    string,
    string
  > /* {
    "de": "Kolumbien",
    "es": "Colombia",
    "fr": "Colombie",
    "ja": "コロンビア",
    "it": "Colombia",
    "br": "Colômbia",
    "pt": "Colômbia"
} */;
  flag: string; // "https://restcountries.eu/data/col.svg",
  regionalBlocs: RegionalBloc[];
  cioc: string; // 'COL';
}
