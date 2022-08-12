import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Pais } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    this.regionActiva = region;
  this.paisService.buscarRegion(this.regionActiva).subscribe(resp =>{
    console.log(resp);
    this.paises = resp;
  },(err)=>{
    this.paises = [];
  });
}


}
