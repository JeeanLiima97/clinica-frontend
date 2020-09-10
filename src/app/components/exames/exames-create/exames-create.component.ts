import { Empresa } from './../../empresas/empresa.model';
import { EmpresaService } from './../../empresas/empresa.service';
import { Router } from '@angular/router';
import { FuncionarioService } from './../../funcionarios/funcionario.service';
import { MedicosService } from './../../medicos/medicos.service';
import { ExameService } from './../exame.service';
import { Funcionario } from './../../funcionarios/funcionarioModel';
import { Medico } from './../../medicos/medicoModel';
import { Exame } from './../exameModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames-create',
  templateUrl: './exames-create.component.html',
  styleUrls: ['./exames-create.component.css']
})
export class ExamesCreateComponent implements OnInit {

  exame: Exame ={
    id: null,
    medico: null,
    funcionario: null,
    tipoExame: '',
    riscoOcupacional: '',
    observacao: ''
  }
  medicos: Medico[];
  funcionarios: Funcionario[];
  empresas: Empresa[]

  constructor(private exameService: ExameService,
     private medicoService :MedicosService, 
     private funcionarioService: FuncionarioService,
     private empresaService: EmpresaService,
      private router: Router) { }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(
      response=> this.funcionarios = response
    );
    this.medicoService.read().subscribe(
      response=> this.medicos = response
    );
    this.empresaService.read().subscribe(
      response=> this.empresas = response
    )
  }

  createExame(){
    this.exameService.create(this.exame).subscribe(()=>{
      this.router.navigate(['/'])    })
  }

}
