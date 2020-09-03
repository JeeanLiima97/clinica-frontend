import { Empresa } from './../empresa.model';
import { Router } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas-create',
  templateUrl: './empresas-create.component.html',
  styleUrls: ['./empresas-create.component.css']
})
export class EmpresasCreateComponent implements OnInit {
  empresa: Empresa ={
    nome: "",
    cnpj: ""
  }

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {  }

  createEmpresa(): void {
    this.empresaService.create(this.empresa).subscribe(() => {      
      this.router.navigate(['/empresas'])

    })
  }

  cancell(): void {
    this.router.navigate(['/empresas'])
  }

}
