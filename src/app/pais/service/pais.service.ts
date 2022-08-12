import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = `https://restcountries.com/v3.1`;

  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }
  buscarCapital( termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }
  verPais( id: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais[]>(url);
  }
  buscarRegion( termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Pais[]>(url);
  }

}
