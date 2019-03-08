import { Component, OnInit } from '@angular/core';
import { MiembrosService } from '../miembros.service';
import { Miembro } from '../models/miembro.models';
import { Router } from '@angular/router';

@Component({
  selector: 'quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  miembros: any
  tokenLocal: any
  tokenAdmin: any

  constructor(private miembrosService: MiembrosService, private router: Router) {
    this.miembrosService.getMiembros().subscribe((res) => {
      this.tokenAdmin = res[0].token
      this.tokenLocal = JSON.parse(localStorage.getItem('token'))
      this.miembros = res
    })
  }

  ngOnInit() {
  }

  borrarSocio(miemId) {
    this.miembrosService.borrarSocio(miemId).subscribe((res) => {
      this.miembrosService.getMiembros().subscribe((res) => {
        this.miembros = res
      })
    })
  }
}
