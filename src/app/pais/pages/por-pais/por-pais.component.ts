import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
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
paisesSugeridos: Pais[] = [];
mostrarSugerencias: boolean = false;
constructor(private paisService:PaisService){}


buscar(termino: string){
  this.mostrarSugerencias = false;
  this.paisesSugeridos = [];
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
  this.mostrarSugerencias = true;
  this.hayError = false;
  this.termino = termino;
  this.paisService.buscarPais(termino).subscribe(paises=>{
    this.paisesSugeridos = paises.splice(0,3);
  },(err) => this.paisesSugeridos = [])
}
}
