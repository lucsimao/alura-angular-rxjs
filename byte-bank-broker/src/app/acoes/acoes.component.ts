import { Component, OnDestroy, OnInit } from '@angular/core';

import { Acoes } from './modelos/acoes';
import { AcoesService } from './acoes.services';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit, OnDestroy {
  public acoesInput = new FormControl();
  public acoes: Acoes;
  private subscription: Subscription;

  constructor(private acoesService: AcoesService) {}

  public ngOnInit(): void {
    this.subscription = this.acoesService.getAcoes().subscribe((acoes) => {
      this.acoes = acoes;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
