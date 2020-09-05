import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  configUrl = 'https://atc.itts.com.tw/User/Login';
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line: typedef
  getConfig() {
    return this.http.get(this.configUrl);
  }
}
