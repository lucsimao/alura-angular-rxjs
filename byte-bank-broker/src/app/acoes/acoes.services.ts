import { Acao, Acoes, AcoesAPI } from './modelos/acoes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, pluck, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  public getAcoes(valor?: string): Observable<Acoes> {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;

    return this.httpClient
      .get<AcoesAPI>('http://localhost:3000/acoes', { params })
      .pipe(
        tap((value) => console.log(value)),
        pluck('payload'),
        map((acoes: Acoes) =>
          acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB))
        )
      );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA === acaoB) {
      return 0;
    }
    return acaoA > acaoB ? 1 : -1;
  }
}
