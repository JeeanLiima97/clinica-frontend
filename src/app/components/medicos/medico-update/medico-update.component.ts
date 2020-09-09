import { Medico } from './../medicoModel';
import { MedicosService } from './../medicos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.css']
})
export class MedicoUpdateComponent implements OnInit {


 medico: Medico ={
   id: null,
   nome:'',
   crm: null
 } 

  constructor(private medicoService: MedicosService ,private router: Router,
    private route: ActivatedRoute) { }

      id = this.medico.id;
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.medicoService.readByID(id).subscribe(medico=>{
      this.medico = medico
    })

  }

  updateMedico():void{
    this.medicoService.update(this.medico).subscribe(()=>{
      this.router.navigate(["/medicos"])
    })
  }

  cancell(): void{
    this.router.navigate(["/medicos"])
  }

}
