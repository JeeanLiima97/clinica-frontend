import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empresas-update',
  templateUrl: './empresas-update.component.html',
  styleUrls: ['./empresas-update.component.css']
})
export class EmpresasUpdateComponent implements OnInit {
  empresa: Empresa ={
    id: null,
    nome: '',
    cnpj: ''
  }

  constructor(private EmpresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute) { }

    id = this.empresa.id;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.EmpresaService.readByID(id).subscribe(empresa=>{
      this.empresa = empresa
    });

  
  }
  updateEmpresas(): void{
    this.EmpresaService.update(this.empresa).subscribe(()=>{
      this.router.navigate(["/empresas"]);
    })
  }
  cancell(): void {
    this.router.navigate(['/empresas'])
  }

}
