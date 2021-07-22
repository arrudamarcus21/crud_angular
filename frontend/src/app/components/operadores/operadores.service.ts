import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Operadores } from '../models/operadores.model';

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  baseUrl = 'http://localhost:3001/operadores';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(operador: Operadores): Observable<Operadores> {
    return this.http.post<Operadores>(this.baseUrl, operador)

  }

  read(): Observable<Operadores[]> {
    return this.http.get<Operadores[]>(this.baseUrl);
  }

  readById(id: string): Observable<Operadores> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Operadores>(url);
  }

  update(operador: Operadores): Observable<Operadores> {
    const url = `${this.baseUrl}/${operador.id}`;
    return this.http.put<Operadores>(url, operador);
  }

  delete(id: number): Observable<Operadores> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Operadores>(url);
  }
}
