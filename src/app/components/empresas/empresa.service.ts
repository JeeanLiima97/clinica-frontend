import { Empresa } from './empresa.model';
import { Observable } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  baseURL = "http://localhost:8083/api/empresas"


  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    create(empresa: Empresa): Observable<Empresa> {
      return this.http.post<Empresa>(this.baseURL, empresa)
    }
    read(): Observable<Empresa[]> {
      return this.http.get<Empresa[]>(this.baseURL)
    }
    readByID(id: string): Observable<Empresa> {
      const url = `${this.baseURL}/${id}`
      return this.http.get<Empresa>(url)
    }
    update(empresa: Empresa): Observable<Empresa>{
      const url = `${this.baseURL}/${empresa.id}`
      return this.http.put<Empresa>(url, empresa)
    }

}
