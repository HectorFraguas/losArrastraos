import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Miembro } from './models/miembro.models';


@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  url: string
  id: number
  miembros: Miembro[]


  constructor(private httpClient: HttpClient) {


    this.url = 'http://localhost:3000/socios/'
   }

   getMiembros(){

   return this.httpClient.get<Miembro[]>(this.url)
   }

   borrarSocio(miemId){

    return this.httpClient.get( `${this.url}/delete/${miemId}`)
   }
}
