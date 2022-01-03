import { AcoesService } from './acoes.services';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  public acoesInput = new FormControl();
  public acoes$ = this.acoesService.getAcoes();

  constructor(private acoesService: AcoesService) {}
}
