import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlsBank } from '../../../assets/url.config';
import { Observable, catchError, map, of, throwError } from 'rxjs';

const local = true;
@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public putSaque(valor: any): Observable<string> {
    const url = urlsBank.saque;
    const opt = { valor };

    return this.realizaMovimentacao(valor, url, 'put');

  }

  public postDeposito(valor: any): Observable<string> {
    const url = urlsBank.deposito;
    return this.realizaMovimentacao(valor, url, 'post');
  }

  public realizaMovimentacao(valor: any, url: string, metodo: string): Observable<string> {
    const payload = { valor }
    return local ?
     this.httpClient.request(metodo, url, {params: payload, responseType: 'text'})
      .pipe(
        map((response) => response),
        catchError(error => throwError(error.error.text || error.error))
      ) :
     of('Sucesso')
  }
}
