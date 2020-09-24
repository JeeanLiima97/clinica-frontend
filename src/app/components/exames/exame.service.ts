import { ExameGraf } from './exameGrafico';
import { Observable } from 'rxjs';
import { Exame } from './exameModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  baseURL = "http://localhost:8083/api/exames"
  urlGraf= "http://localhost:8083/api/exames/risco"
  urlEmpresa ="http://localhost:8083/api/exames/risco"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    create(exame: Exame): Observable<Exame> {
      return this.http.post<Exame>(this.baseURL, exame)
    }
    read(): Observable<Exame[]> {
      return this.http.get<Exame[]>(this.baseURL)
    }
    readByID(id: string): Observable<Exame> {
      const url = `${this.baseURL}/${id}`
      return this.http.get<Exame>(url)
    }
    // update(exame: Exame): Observable<Exame>{
    //   const url = `${this.baseURL}/${exame.id}`
    //   return this.http.put<Exame>(url, exame)
    // }
    readGraf(): Observable<ExameGraf[]> {
      return this.http.get<ExameGraf[]>(this.urlGraf)
    }
    readEmpresa():Observable<ExameGraf[]> {
      return this.http.get<ExameGraf[]>(this.urlEmpresa)
    }
    delete(id: number): Observable<Exame>{
      const url = `${this.baseURL}/${id}`
      return this.http.delete<Exame>(url)
    } 
}
