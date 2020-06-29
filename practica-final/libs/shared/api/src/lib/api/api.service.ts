import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private continentsURL = 'http://api.worldbank.org/v2/region/?format=json';
  private regionsURL = 'http://api.worldbank.org/v2/region/';
  private countryURL = 'http://api.worldbank.org/V2/country/'

  constructor(private httpClient: HttpClient) { }

  public getContinents$(): Observable<any> {
    return this.httpClient.get<any>(this.continentsURL);
  }

  public getRegions$(continentCode): Observable<any> {
    return this.httpClient.get<any>(`${this.regionsURL}${continentCode}/country?per_page=1000&format=json`);
  }

  public getCountry(id): Observable<any> {
    return this.httpClient.get<any>(`${this.countryURL}${id}?format=json`);
  }
}
