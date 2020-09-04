import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas-read',
  templateUrl: './empresas-read.component.html',
  styleUrls: ['./empresas-read.component.css']
})
export class EmpresasReadComponent implements OnInit {

  empresas: Empresa[]
  displayedColumns = ['id', 'nome', 'cnpj', 'action']

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {

    this.empresaService.read().subscribe(empresas=> {
      this.empresas =empresas
      console.log(empresas);
      
    })
  }

}
