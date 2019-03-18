import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
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
<<<<<<< HEAD
      // console.log(res)
=======
>>>>>>> parent of 2b358d6... pintado usuarios y foto de usuario en las rutas
      this.rutas = res
    })
  }


}
