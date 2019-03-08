import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Rutas } from '../models/rutas';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrarseService } from '../registrarse.service';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  rutas: any

  formRegistro: FormGroup

  constructor(private eventosService: EventosService, public registrarseService: RegistrarseService) {
    
    this.eventosService.getRutas().subscribe((res) => {
      this.rutas = res
    })
  }

  ngOnInit() {
    this.formRegistro = new FormGroup({
      provincia: new FormControl(''),
      tipoRuta: new FormControl('')
    })
  }

  filtrarRutas(){
    this.eventosService.filtrarRutas(this.formRegistro.value).subscribe((res) => {
      this.rutas = res
    })
  }


}
