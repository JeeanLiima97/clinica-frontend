import { Router } from '@angular/router';
import { ClinicaService } from './../clinica.service';
import { Clinica } from './../clinicaModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinica-create',
  templateUrl: './clinica-create.component.html',
  styleUrls: ['./clinica-create.component.css']
})
export class ClinicaCreateComponent implements OnInit {
  clinica: Clinica ={
    nome: ''
  }

  constructor(private clinicaService: ClinicaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createClinica(): void{
    console.log("pegando o botao");
    
    this.clinicaService.create(this.clinica).subscribe(()=> {
      this.router.navigate(['/clinica'])
    })
  }
  cancell(): void {
    this.router.navigate(['/clinica'])
  }

}
