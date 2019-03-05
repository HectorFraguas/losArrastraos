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

  constructor(private registrarservice: RegistrarseService, private router: Router) {
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
      this.router.navigate(['/home'])
    })
  }



}
