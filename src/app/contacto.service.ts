import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url: string

  constructor(private httpClient: HttpClient) { 

    this.url = 'http://localhost:3000/mail'
  }

  enviarContacto(value){
    // console.log(value)
    return this.httpClient.post<string>(`${this.url}`, {nombre: value.nombre, email: value.email, asunto: value.asunto})
  }
  
}
