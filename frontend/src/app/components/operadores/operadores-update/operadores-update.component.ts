import { OperadoresService } from './../operadores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Operadores } from '../../models/operadores.model';

@Component({
  selector: 'app-operadores-update',
  templateUrl: './operadores-update.component.html',
  styleUrls: ['./operadores-update.component.css']
})
export class OperadoresUpdateComponent implements OnInit {
  
  operadores: Operadores = {
    nome: '',
    email: '',
    contato: '',
    ativo: false
  }
  novoOperarioForm!: FormGroup;
  
  constructor(private operadoresService: OperadoresService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.operadoresService.readById(id).subscribe(operadores => {
      this.operadores = operadores;
    })
  }

  updateOperador(): void {
    this.operadoresService.update(this.operadores).subscribe(() => {
      this.operadoresService.showMessage('Operador atualizado com sucesso.')
      this.router.navigate(['/operadores'])
    })
  }
  
  cancel(): void {
    this.router.navigate(['/operadores'])
  }

}
