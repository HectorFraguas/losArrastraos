import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  arrUsuarios: Usuarios[]

  constructor() { 

    this.arrUsuarios = [
      {id: 1, nombre: 'Hector', usuario: 'fraguas14', email: 'fraguas@gmail.com', imagen: '../../assets/miembros/hector.jpg'},
    ]
  }

  ngOnInit() {
  }

}
