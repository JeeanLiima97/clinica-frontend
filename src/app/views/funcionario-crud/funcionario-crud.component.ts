import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-crud',
  templateUrl: './funcionario-crud.component.html',
  styleUrls: ['./funcionario-crud.component.css']
})
export class FuncionarioCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToFuncionarioCreate(): void{
    this.router.navigate(['/funcionarios/create'])
    
  }
}
