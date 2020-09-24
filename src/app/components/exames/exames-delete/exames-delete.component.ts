import { Exame } from './../exameModel';
import { ExameService } from './../exame.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames-delete',
  templateUrl: './exames-delete.component.html',
  styleUrls: ['./exames-delete.component.css']
})
export class ExamesDeleteComponent implements OnInit {

  exame: Exame;
  constructor(private exameService: ExameService, private router: Router, 
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') 
    this.exameService.readByID(id).subscribe(exame=>{
      this.exame = exame;
    })
  }
  
  deleteExame(): void{
    this.exameService.delete(this.exame.id).subscribe(()=>{
      this.router.navigate(['/exames'])
    })
  }
  cancell(): void {
    this.router.navigate(['/exames'])
  }

}
