import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interface/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

termino: string = '';
hayError: boolean = false;
paises: Pais[] = [];


constructor(private paisService:PaisService){}


buscar(termino: string){
  this.termino = termino;
  this.paisService.buscarPais(this.termino).subscribe(resp =>{
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
