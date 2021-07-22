import { OperadoresUpdateComponent } from './../../components/operadores/operadores-update/operadores-update.component';
import { OperadoresCreateComponent } from './../../components/operadores/operadores-create/operadores-create.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-operadores-crud',
  templateUrl: './operadores-crud.component.html',
  styleUrls: ['./operadores-crud.component.css']
})
export class OperadoresCrudComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  navigateToOperadoresCreate() {
    this.router.navigate(['operadores-create'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(OperadoresCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}


