import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrarseService } from '../registrarse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formRegistro: FormGroup

  mensajeError : string

  constructor(private registrarservice: RegistrarseService, private router: Router) {

    this.mensajeError = ''

    this.formRegistro = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
      ]),
      clave: new FormControl('', [
        Validators.required,
      ])
    })
   }

  ngOnInit() {
  }


  enviarLogin(){
    this.registrarservice.enviarLogin(this.formRegistro.value).subscribe((res) => {
      if(res['error']){
        this.mensajeError = 'Usuario y/o contraseña incorrectos'
      }else{
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/home'])
      }
    })
  }
}
