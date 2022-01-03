import { Acao, Acoes } from './modelos/acoes';
import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  public getAcoes(): any {
    return this.httpClient.get<any>('http://localhost:3000/acoes').pipe(
      tap((value) => console.log(value)),
      map((api) => api.payload),
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
