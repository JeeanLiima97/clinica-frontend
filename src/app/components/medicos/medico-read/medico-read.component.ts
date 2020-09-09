import { Medico } from './../medicoModel';
import { MedicosService } from './../medicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css']
})
export class MedicoReadComponent implements OnInit {
  medicos: Medico[]
  displayedColumns = ['id', 'nome', 'crm', 'action']

  constructor(private medicoService: MedicosService) { }

  ngOnInit(): void {
    this.medicoService.read().subscribe(medicos=>{
      this.medicos = medicos
    })

  }

}
