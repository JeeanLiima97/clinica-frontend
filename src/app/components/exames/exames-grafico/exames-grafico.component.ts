import { ExameGraf } from './../exameGrafico';
import { Component, OnInit } from '@angular/core';
import { ExameService } from './../exame.service';



@Component({
  selector: 'app-exames-grafico',
  templateUrl: './exames-grafico.component.html',
  styleUrls: ['./exames-grafico.component.css']
})
export class ExamesGraficoComponent implements OnInit {

  constructor(private exameService: ExameService) { }

  riscos : ExameGraf[];
  displayedColumns = ['riscos', 'quantidade']
 
  
  ngOnInit(): void {

    this.exameService.readGraf().subscribe((response) => {
            this.riscos=response
            console.log(this.riscos);
            
      })
    
      
    }
    
    
    
    
  }














