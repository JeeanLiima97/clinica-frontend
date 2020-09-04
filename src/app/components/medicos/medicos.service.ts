import { Medico } from './medicoModel';
import { Observable } from 'rxjs';
import { Funcionario } from './../funcionarios/funcionarioModel';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  baseURL = "http://localhost:8083/api/medicos"
  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseURL, medico)
  }
  read(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.baseURL)
    
  }
  readByID(id: string): Observable<Medico> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Medico>(url)
  }
  update(medico: Medico): Observable<Medico>{
    const url = `${this.baseURL}/${medico.id}`
    return this.http.patch<Medico>(url, medico)
  }
}
