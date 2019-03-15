import { Component, OnInit, ViewChild } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrarseService } from '../registrarse.service';

declare var google;

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  ruta: any
  tokenUsuario: any

  @ViewChild('googleMap') gMap: any 
  map: any 
  directionsService: any
  directionsDisplay: any
  duracion: any
  distancia: any


  constructor(private eventosService: EventosService, private router: Router, private activatedRoute: ActivatedRoute, private registrarseService: RegistrarseService) {


  }

  ngOnInit() {

    this.loadMap()

    // console.log(this.ruta.longitud, this.ruta.latitud)


    this.activatedRoute.params.subscribe(params => {
      this.eventosService.getRuta(params.id).subscribe((res) => {
        if (res.length == 0) {
          this.router.navigate(['/eventos'])
        }
        else {
          let tokenAdmin = res['token']
          this.tokenUsuario = JSON.parse(localStorage.getItem('token'))
          console.log(res)
          this.ruta = res

          this.generateRoute(new google.maps.LatLng(this.ruta.latitud, this.ruta.longitud), new google.maps.LatLng(this.ruta.latllegada, this.ruta.longllegada))
          // console.log(this.ruta.longitud, this.ruta.latitud)
          // console.log(this.ruta.longllegada, this.ruta.latllegada)
        }
      })
    })
  }

  // GOOGLE MAPS

loadMap() {
  this.directionsService = new google.maps.DirectionsService()
  this.directionsDisplay = new google.maps.DirectionsRenderer()

  let propsMap = {
    center: new google.maps.LatLng(0,
      0),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  this.map = new google.maps.Map(this.gMap.nativeElement, propsMap)

  this.directionsDisplay.setMap(this.map)

}

generateRoute(start, end) {

  let requestOpts = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode['DRIVING']
  }

  let self = this

  this.directionsService.route(requestOpts, (result) => {
    self.directionsDisplay.setDirections(result)
    this.duracion = (result.routes[0].legs[0].duration.text)
    this.distancia = (result.routes[0].legs[0].distance.text)
    // console.log(result.routes[0].legs[0].duration.text)
    // console.log(result.routes[0].legs[0].distance.text)
  })
}

  // AQUI TERMINA GOOGLE MAPS


  getRuta(id) {
    this.eventosService.getRuta(id).subscribe((res) => {

      this.ruta = res
    })
  }

  eliminarRuta(id) {
    console.log(id)
    this.eventosService.deletedRuta(id).subscribe((res) => {
      this.router.navigate(['/eventos'])
    })
  }

  enviarComentario(value) {
    let token = JSON.parse(localStorage.getItem('token'))
    let comentario = value
    let idRuta = this.ruta.idRuta

    this.eventosService.enviarComentario(token, comentario, idRuta).subscribe((res) => {
      this.activatedRoute.params.subscribe(params => {
        this.eventosService.getRuta(params.id).subscribe((res) => {
          if (res.length == 0) {
            this.router.navigate(['/eventos'])
          }
          else {
            let tokenAdmin = res['token']
            this.tokenUsuario = JSON.parse(localStorage.getItem('token'))
            this.ruta = res
          }
        })
      })
    })
  }

  borrarComentario(id) {
    this.eventosService.borrarComentario(id).subscribe((res) => {
      this.activatedRoute.params.subscribe(params => {
        this.eventosService.getRuta(params.id).subscribe((res) => {
          if (res.length == 0) {
            this.router.navigate(['/eventos'])
          }
          else {
            let tokenAdmin = res['token']
            this.tokenUsuario = JSON.parse(localStorage.getItem('token'))
            this.ruta = res
          }
        })
      })
    })
  }
}
