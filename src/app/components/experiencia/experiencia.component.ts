import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  
 
  

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.ObtenerDatos().subscribe(data => { 
      
      //console.log(data.experience); 
      //console.log(data.experience[0].activity[0]);  
      this.experienciaList = data.experience;     
      
    })
  }

}
