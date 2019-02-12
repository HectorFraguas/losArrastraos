import { Component, OnInit } from '@angular/core';
import { MiembrosService } from '../miembros.service';
import { Miembro } from '../models/miembro.models';

@Component({
  selector: 'quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  miembros: Miembro[]

  constructor(private miembrosService: MiembrosService) {

    this.miembrosService.getMiembros().subscribe((res) => {

      this.miembros = res

      console.log(this.miembros)
    })
   }

  ngOnInit() {
  }

 

}
