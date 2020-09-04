import { Router } from '@angular/router';
import { MedicosService } from './../medicos.service';
import { Medico } from './../medicoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {
  medico: Medico ={
    nome: '',
    crm: ''
  }

  constructor(private medicoService: MedicosService, private router: Router) { }

  ngOnInit(): void {
  }

  createMedico(): void{
    this.medicoService.create(this.medico).subscribe(()=>{
      this.router.navigate(['/medicos'])
    })
  }

  cancell(): void {
    this.router.navigate(['/medicos'])
  }

}
