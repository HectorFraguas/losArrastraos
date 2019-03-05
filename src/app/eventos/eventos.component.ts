import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Rutas } from '../models/rutas';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  rutas: Rutas[]

  constructor(private eventosService: EventosService) {
    
    this.eventosService.getRutas().subscribe((res) => {
      this.rutas = res
    })
  }

  ngOnInit() {
  }


}
