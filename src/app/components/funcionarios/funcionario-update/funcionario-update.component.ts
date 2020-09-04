import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario: Funcionario ={
    id: null,
    nome: '',
    matricula: null,
  

  }

  constructor(private funcionarioService: FuncionarioService,  private router: Router,
    private route: ActivatedRoute) { }

id = this.funcionario.id;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.funcionarioService.readByID(id).subscribe(funcionario=>{
      this.funcionario = funcionario
    });
  }

  updateFuncionario():void{
    this.funcionarioService.update(this.funcionario).subscribe(()=>{
      this.router.navigate(["/funcionarios"])
    })
  }

  cancell(): void{
    this.router.navigate(["/funcionarios"])
  }

}
