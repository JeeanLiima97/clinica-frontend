import { Observable } from 'rxjs';
import { Funcionario } from './funcionarioModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  baseURL = "http://localhost:8083/api/funcionarios"
  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseURL, funcionario)
  }
  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseURL)
  }
  readByID(id: string): Observable<Funcionario> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Funcionario>(url)
  }
}
