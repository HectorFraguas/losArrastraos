import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from './models/usuarios';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string
  usuario: Usuarios[]

  constructor(private httpClient: HttpClient) {

    this.url = 'http://localhost:3000/perfil'
   }

  postUsuario(ptoken) {
   return this.httpClient.post(this.url, {token: ptoken})

  }

  actualizarUsuario(value){
    console.log(value)
    return this.httpClient.post(`${this.url}/update`, {token: value.token, email: value.email, imagen: value.imagen})
  }

  enviarImagen(value){
    return this.httpClient.post(`${this.url}/update/updatefotoperfil`, {imagen: value.imagen, token: value.token})
  }
}
