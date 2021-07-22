import { OperadoresService } from './../operadores.service';
import { Component, OnInit } from '@angular/core';
import { Operadores } from '../../models/operadores.model';

@Component({
  selector: 'app-operadores-read',
  templateUrl: './operadores-read.component.html',
  styleUrls: ['./operadores-read.component.css']
})
export class OperadoresReadComponent implements OnInit {

  operadores: Operadores[];
  displayedColumns: string[] = ['id', 'nome', 'email', 'contato', 'ativo', 'action'];

  constructor(private operadoresService: OperadoresService) { }

  ngOnInit(): void {
    this.operadoresService.read().subscribe((operadores) => {
      this.operadores = operadores;
    })
  }
}