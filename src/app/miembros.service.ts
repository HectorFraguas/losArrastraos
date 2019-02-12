import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Miembro } from './models/miembro.models';


@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  url: string

  constructor(private httpClient: HttpClient) {

    this.url = 'https://losarrastraos-f55f6.firebaseio.com/personas.json'
   }

   getMiembros(){

   return this.httpClient.get<Miembro[]>(this.url)
   }
}
