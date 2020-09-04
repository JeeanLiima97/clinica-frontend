import { EmpresaService } from './../../empresas/empresa.service';
import { Router } from '@angular/router';
import { FuncionarioService } from './../funcionario.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from './../funcionarioModel';
import { Empresa } from './../../empresas/empresa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario ={
    matricula: null,
    nome : '',
    empresa : null
  }
  empresas: Empresa[]

  constructor(private funcionarioService: FuncionarioService, private router: Router, private empresaService: EmpresaService) { }

  
  ngOnInit(): void {

    this.empresaService.read().subscribe(
      response=>this.empresas = response);
    

  }
  createFuncionario(){
    this.funcionarioService.create(this.funcionario).subscribe(()=>{
      this.router.navigate(['/funcionarios'])
    })
  }




}
