import { Acao, Acoes } from './modelos/acoes';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  public getAcoes(): any {
    return this.httpClient
      .get<any>('http://localhost:3000/acoes')
      .pipe(
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
