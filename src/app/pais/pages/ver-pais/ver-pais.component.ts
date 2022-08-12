import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../service/pais.service';
import { Pais } from '../../interface/pais.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais: Pais[] = [];

  constructor(private activatedRoute: ActivatedRoute,private paisService:PaisService) { }
  params: string = '';
  ngOnInit(): void {


    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.verPais(id))
    )
    .subscribe(resp => {
      this.pais[0] = resp[0];
    });
  }

}
