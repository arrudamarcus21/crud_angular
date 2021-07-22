import { OperadoresService } from './../operadores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operadores } from '../../models/operadores.model';

@Component({
  selector: 'app-operadores-delete',
  templateUrl: './operadores-delete.component.html',
  styleUrls: ['./operadores-delete.component.css']
})
export class OperadoresDeleteComponent implements OnInit {

  operador: Operadores;

  constructor(private operadoresService: OperadoresService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.operadoresService.readById(id).subscribe(operador => {
      this.operador = operador;
    })
  }

  deleteOperador(): void {
    this.operadoresService.delete(this.operador.id).subscribe(() => {
      this.operadoresService.showMessage("Operador deletado com sucesso")
      this.router.navigate(['/operadores'])
      console.clear()
    })
  }

  cancel(): void {
    this.router.navigate(['/operadores'])
  }

}
