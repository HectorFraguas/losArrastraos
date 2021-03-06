import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioRutaService {

  url: string

  constructor(private httpClient: HttpClient) {
  //  this.url = 'http://localhost:3000/rutas'
     this.url = 'https://back.losarrastraos.com/rutas'
  }

  enviarRuta(value, latSalida, latLlegada, longSalida, longLlegada) {
    // console.log(value)
    return this.httpClient.post(`${this.url}/new`, { titulo: value.titulo, provincia: value.provincia, tipoRuta: value.tipoRuta, salida: value.salida, llegada: value.llegada, descripcion: value.descripcion, latitud: latSalida, longitud: longSalida, latllegada:latLlegada, longllegada:longLlegada, token: JSON.parse(localStorage.getItem('token')) })
  }
}
