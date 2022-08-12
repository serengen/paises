import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Pais } from '../../interface/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  @Input() paises: Pais [] = [];
  
  constructor(private paisService:PaisService) { }


}
