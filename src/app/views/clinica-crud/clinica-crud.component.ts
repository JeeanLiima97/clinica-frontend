import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinica-crud',
  templateUrl: './clinica-crud.component.html',
  styleUrls: ['./clinica-crud.component.css']
})
export class ClinicaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/clinica/create'])
    
  }

}
