import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  rutas: any[]

  constructor(private eventosService: EventosService, private router: Router) {
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

  eliminarRuta(id){
    
    this.eventosService.deletedRuta(id).subscribe(() => {
      this.router.navigate(['/eventos'])
    })
  }

}
