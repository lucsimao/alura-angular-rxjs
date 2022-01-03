import { filter, switchMap, tap } from 'rxjs/operators';

import { AcoesService } from './acoes.services';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  public acoesInput = new FormControl();
  public todasAcoes$ = this.acoesService
    .getAcoes()
    .pipe(tap(() => console.log('Fluxo Inicial')));
  public filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => console.log('Fluxo do Filtro')),
    tap(() => console.log),
    filter(
      (valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length
    ),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );

  public acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);

  constructor(private acoesService: AcoesService) {}
}
