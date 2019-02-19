import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  rutas: any[]

  constructor() {

    this.rutas = [
      {id: 0,
      titulo: 'Ruta uno',
      provincia: 'Madrid',
      salida: 'Calle Los Prados',
      llegada: 'Calle Los almendros',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, adipisci incidunt. Iure repellat quae voluptatum voluptas mollitia exercitationem sint omnis! Id ab magni repellendus expedita sit ut laborum eius laudantium.',
      tipo: 'asfalto',
      fotos: '../../assets/motos/moto2.jpg'}
    ]
  }

  ngOnInit() {
  }

  eliminarRuta(){

    
  }

}
