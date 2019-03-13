import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url: string
  rutas: any

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/rutas'
  }

  getRutas() {
    return this.httpClient.get<any[]>(`${this.url}/all`)
  }

  deletedRuta(id) {
    return this.httpClient.get(`${this.url}/delete/${id}`)
  }

  filtrarRutas(value) {
    return this.httpClient.post(`${this.url}/filtro`, { provincia: value.provincia, tipoRuta: value.tipoRuta })
  }

  getRuta(id) {
    return this.httpClient.get<any[]>(`${this.url}/${id}`)
  }

  enviarComentario(token, comentario, idRuta) {
    console.log(token, comentario, idRuta, 'service')
    return this.httpClient.post(`${this.url}/agregarcomentario`, { comentario: comentario, fk_ruta: idRuta, token: token })
  }

  borrarComentario(id) {
    return this.httpClient.post(`${this.url}/borrarcomentario`, { id: id })
  }
}
