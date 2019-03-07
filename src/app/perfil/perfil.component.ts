import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  arrUsuarios: any
  token: any

  formRegistro: FormGroup

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('token'))

    this.usuarioService.postUsuario(this.token).subscribe((res) => {
      this.arrUsuarios = res

      this.formRegistro = new FormGroup({
        email: new FormControl(this.arrUsuarios.email)})
    })
    
  }

  cerrarSesion() {
    localStorage.clear()
    this.router.navigate(['/home'])
  }

  actualizarUsuario(){
    this.formRegistro.value.token = JSON.parse(localStorage.getItem('token'))
    this.usuarioService.actualizarUsuario(this.formRegistro.value).subscribe((res) => {  
    })
  }
}
