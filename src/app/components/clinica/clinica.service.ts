
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinica } from './clinicaModel';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {


  baseURL = "http://localhost:8083/api/clinica"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    create(clinica: Clinica): Observable<Clinica> {
      return this.http.post<Clinica>(this.baseURL, clinica)
}
read(): Observable<Clinica[]> {
  return this.http.get<Clinica[]>(this.baseURL)
}

}
