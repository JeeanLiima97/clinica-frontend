import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FuncionarioRead } from './FuncionarioModelRead';
import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionarioModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[];
  displayedColumns = ['id', 'nome', 'matricula', 'empresa.nome', 'action']

  constructor(private funcionarioService: FuncionarioService) { }

  
  
  ngOnInit(): void {

 this.funcionarioService.read().subscribe(funcionarios =>{
this.funcionarios = funcionarios
  
 })
      
 
  }
  
}
