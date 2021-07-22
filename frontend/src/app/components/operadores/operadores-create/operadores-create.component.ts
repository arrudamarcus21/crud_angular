import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OperadoresService } from './../operadores.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Operadores } from '../../models/operadores.model';

@Component({
  selector: 'app-operadores-create',
  templateUrl: './operadores-create.component.html',
  styleUrls: ['./operadores-create.component.css']
})
export class OperadoresCreateComponent implements OnInit {
  status = false;
  novoOperarioForm!: FormGroup;

  operadores: Operadores = {
    nome: '',
    email: '',
    contato: '',
    ativo: false
  }

  constructor(private operadorService: OperadoresService, private dialogRef: MatDialogRef<OperadoresCreateComponent>,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.novoOperarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      contato: ['', Validators.required],
      ativo: [false, Validators.required]
    })
  }

  createOperador(): void {
    this.operadorService.create(this.operadores).subscribe(() => {
      this.operadorService.showMessage('Operação executada com sucessso!!');
      this.dialogRef.close();
      window.location.reload();
    })
  }

  cancel() {
    this.dialogRef.close();
  }

}
