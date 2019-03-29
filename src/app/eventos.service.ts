import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url: string
  rutas: any

  constructor(private httpClient: HttpClient) {
    // this.url = 'http://localhost:3000/rutas'
    this.url = 'https://back.losarrastraos.com/rutas'
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
    return this.httpClient.post(`${this.url}/agregarcomentario`, { comentario: comentario, fk_ruta: idRuta, token: token })
  }

  borrarComentario(id) {
    console.log(id)
    return this.httpClient.post(`${this.url}/borrarcomentario`, { id: id })
  }
}
