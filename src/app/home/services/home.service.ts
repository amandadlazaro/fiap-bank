import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlsBank } from '../../../assets/url.config';
import { Observable, catchError, of, throwError } from 'rxjs';

const local = true;
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSaldo(): Observable<number> {
    const url = urlsBank.saldo;
    const corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '/' , // edit 
    });
    return local ?
     this.httpClient.get<number>(url, {headers: corsHeaders}) :
     of(102)
  }
}
