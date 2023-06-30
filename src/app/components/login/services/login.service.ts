import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly _PATH_IP = 'https://dummyjson.com/auth/login';
  constructor(private http: HttpClient) {}

  login(request: any): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    /*const request = {
      username: 'kminchelle',
      password: '0lelplR',
    };*/

    const path = `https://dummyjson.com/auth/login`;
    return this.http.post(path, request, { headers: headers });
  }
}
