import { Component, OnInit } from '@angular/core';

import { Acoes } from './modelos/acoes';
import { AcoesService } from './acoes.services';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  public acoesInput = new FormControl();
  public acoes: Acoes;

  constructor(private acoesService: AcoesService) {}

  public ngOnInit(): void {
    this.acoesService.getAcoes().subscribe((acoes) => {
      this.acoes = acoes;
    });
  }
}
