import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {

  url: string
  


  constructor(private httpclient: HttpClient) { 
  
    // this.url = 'http://localhost:3000/login/'
    this.url = 'https://back.losarrastraos.com/login/'
  }

  enviarRegistro(value){
    console.log(value)
    return this.httpclient.post(`${this.url}new`, {nombre: value.nombre, usuario: value.usuario, email: value.email, clave: value.clave})
  }

  enviarLogin(value){
    return this.httpclient.post(`${this.url}login`, {usuario: value.usuario, clave: value.clave})
  }

  comprobarToken(){

    if (localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
    // return localstorage.getItem('token')? true:false
  }
}
