import { ActivatedRoute } from '@angular/router';
import { Exame } from './../exameModel';
import { ExameService } from './../exame.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames-read',
  templateUrl: './exames-read.component.html',
  styleUrls: ['./exames-read.component.css']
})
export class ExamesReadComponent implements OnInit {

  exames: Exame[]
  exameSelecionado: Exame
  displayedColumns = ['id', 'medico', 'funcionario', 'empresa','tipoExame', 
  'riscoOcupacional', 'action']

  constructor(private exameService: ExameService) { }

  ngOnInit(): void {
    this.exameService.read().subscribe(exames=>{
      this.exames = exames
    });
  }



}
