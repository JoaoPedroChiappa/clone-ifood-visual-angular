import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  apiUrl = 'http://localhost:3000/restaurante';

  //Get all data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }
}