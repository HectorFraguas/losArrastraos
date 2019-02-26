import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Miembro } from './models/miembro.models';

@Injectable({
  providedIn: 'root'
})
export class FormularioMiembrosService {

  miembros: Miembro[]
  url: string

  constructor(private httpclient: HttpClient) {

    this.url = 'http://localhost:3000/socios/'
   }

   agregarMiembro(value){

    return this.httpclient.post(`${this.url}/new`, {nombre: value.nombre, moto: value.moto, cargo: value.cargo, foto: value.foto})
   }
}
