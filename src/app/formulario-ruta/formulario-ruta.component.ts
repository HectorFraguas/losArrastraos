import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioRutaService } from '../formulario-ruta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-ruta',
  templateUrl: './formulario-ruta.component.html',
  styleUrls: ['./formulario-ruta.component.css']
})
export class FormularioRutaComponent implements OnInit {

  formRegistro: FormGroup

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
      llegada: new FormControl('', [

      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(200)
      ]),
      latitud: new FormControl(''),
      longitud: new FormControl('')
    })
  }

  formRuta() {

    this.formularioRutaService.enviarRuta(this.formRegistro.value).subscribe((res) => {
        this.router.navigate(['/eventos'])
    })
  }
}
