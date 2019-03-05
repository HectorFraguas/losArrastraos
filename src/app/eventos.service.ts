import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rutas } from './models/rutas';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url: string
  rutas: Rutas[]

  constructor(private httpClient: HttpClient) { 
    this.url = 'http://localhost:3000/rutas'
  }

  getRutas(){
    return this.httpClient.get<Rutas[]>(`${this.url}/all`)
  }

  deletedRuta(id){
    return this.httpClient.get(`${this.url}/delete/${id}`)
  }
}