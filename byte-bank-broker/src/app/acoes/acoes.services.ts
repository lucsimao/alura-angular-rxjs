import { Acao, Acoes, AcoesAPI } from './modelos/acoes';
import { map, pluck, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  public getAcoes(): Observable<Acoes> {
    return this.httpClient.get<AcoesAPI>('http://localhost:3000/acoes').pipe(
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
