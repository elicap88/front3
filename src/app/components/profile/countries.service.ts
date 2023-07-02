import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly _PATH_IP = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    const path = `${this._PATH_IP}`;
    return this.http.get(path).pipe(map((data: any) => data));
  }
}
