import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioRutaService } from '../formulario-ruta.service';
import { Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-formulario-ruta',
  templateUrl: './formulario-ruta.component.html',
  styleUrls: ['./formulario-ruta.component.css']
})
export class FormularioRutaComponent implements OnInit {

  formRegistro: FormGroup

  latSalida: any
  longSalida: any
  latLlegada: any
  longLlegada: any

  constructor(private formularioRutaService: FormularioRutaService, private router: Router) { }

  ngOnInit() {
    this.formRegistro = new FormGroup({

      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(80)
      ]),
      provincia: new FormControl('', [
        Validators.required,
      ]),
      tipoRuta: new FormControl('', [
        Validators.required
      ]),
      salida: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(200)
      ]),
      llegada: new FormControl('')
    })

    this.autocompletadoGoogle()
    
  }

  formRuta() {
    // console.log(this.formRegistro.value)
    this.formularioRutaService.enviarRuta(this.formRegistro.value, this.latSalida, this.latLlegada, this.longSalida, this.longLlegada).subscribe((res) => {
        this.router.navigate(['/eventos'])
    })
  }

  autocompletadoGoogle() {

    let inputSalida = document.getElementById('inputPlaceSalida')
    let inputLlegada = document.getElementById('inputPlaceLlegada')
    let autocompleteSalida = new google.maps.places.Autocomplete(inputSalida)
    let autocompleteLlegada = new google.maps.places.Autocomplete(inputLlegada)

    autocompleteSalida.setFields(['address_components', 'geometry', 'icon', 'name'])
    autocompleteLlegada.setFields(['address_components', 'geometry', 'icon', 'name'])

    autocompleteSalida.addListener('place_changed', () => {
      let place = autocompleteSalida.getPlace()
      let latSalida = place.geometry.location.lat()
      let lngSalida = place.geometry.location.lng()
      let m = new google.maps.Marker({
        animation: google.maps.Animation.DROP
      })
      this.latSalida = latSalida
      this.longSalida = lngSalida
      // console.log(this.latSalida, this.longSalida)
    })

    autocompleteLlegada.addListener('place_changed', () => {
      let place = autocompleteLlegada.getPlace()
      let latLlegada = place.geometry.location.lat()
      let lngLlegada = place.geometry.location.lng()
      let m = new google.maps.Marker({
        animation: google.maps.Animation.DROP
      })
      this.latLlegada = latLlegada
      this.longLlegada = lngLlegada
      // console.log(this.latLlegada, this.longLlegada)
    })
  }
}
