import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interface/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})

export class PorCapitalComponent{
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  
  
  constructor(private paisService:PaisService){}
  
  
  buscar(termino: string){
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(resp =>{
      console.log(resp);
      this.hayError = false;
      this.paises = resp;
    },(err)=>{
      this.hayError = true;
      this.paises = [];
    });
  }
  sugerencias(termino: string){
    this.buscar(termino);
  }

}
